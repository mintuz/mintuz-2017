---
title: Nginx Reverse Proxy with Apache 2 and Puma
date: "2013-07-28T22:40:32.169Z"
path: "/2013/07/28/nginx-reverse-proxy-with-apache-2-and-puma"
type: "post"
features: "cta-contact"
---

I decided to alter my web server setup after realising a standard Apache 2 install comes with too much overhead whilst serving out static content. At the same time I thought it would be a good opportunity to look into different methods of serving web applications written in ruby, primarily Rails and Sinatra. Originally my web server was running Apache2 with libapache2-mod-php5 and mysql. Nothing special about it, infact it was pretty basic. For serving out ruby applications I used [mod_passenger](https://www.phusionpassenger.com/) developed by Phusion.

## **Benchmark**

using Apache benchmark for 5 seconds and sending 100 requests my old setup had a mean average of 0.40 requests per second across 10 tests. After altering my setup to what will be discussed further on in this blog post, the mean average requests per second were increased to 8.97. That is a drastic increase and you can really tell the difference especially with loading large images.

## **The New Setup**

I have setup my web server to use Apache 2 and Puma with Nginx as a reverse proxy listening on port 80. This allows you to serve out ruby based applications and PHP based websites driven by content management systems such as Wordpress.

### Setting up Nginx with Apache 2

Lets get started, First we will setup Nginx to be the Reverse Proxy in front of Apache 2, I am using Ubuntu 12.04 so I use aptitude as my package manager.

```bash
$ sudo apt-get install nginx
```

The first thing to do is alter your default site configuration located in** /etc/nginx/sites-availble/** to look like the configuration below. This is used to serve out PHP based websites mainly running Wordpress. Thanks to [@iceicetimmy](http://www.applicious.co/2013/06/upgraded-to-nginx/) for providing the basis of this config. [work] I have made a few alterations for my scenario such as adding default to the listen directive, doing this forces the server block to run as the default configuration. Without it, the Puma server block further down would override it causing every website to redirect to your ruby applications. I also removed the **rewrite ^(.*) $scheme** line because it simply breaks.

```
server {

        listen 80 default;
    index index.php;
        rewrite /wp-admin$ $scheme://$host$uri/ permanent;

        location = /favicon.ico {
                log_not_found off;
                access_log off;
        }

        location = /robots.txt {
                allow all;
                log_not_found off;
                access_log off;
        }

        location ~ /\. {
                deny all;
        }

        location ~* /(?:uploads|files)/.*\.php$ {
                deny all;
        }

        location / {

            proxy_pass http://127.0.0.1:8080;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $remote_addr;
                proxy_set_header Host $host;

    }

}
```

The next step is to configure Apache 2 to listen on port 8080 instead of the standard 80. Change **/etc/apache2/ports.conf** to look similar to this.

```
# If you just change the port or add more ports here, you will likely also
# have to change the VirtualHost statement in
# /etc/apache2/sites-enabled/000-default
# This is also true if you have upgraded from before 2.2.9-3 (i.e. from
# Debian etch). See /usr/share/doc/apache2.2-common/NEWS.Debian.gz and
# README.Debian.gz

NameVirtualHost 127.0.0.1:8080
Listen 8080

# If you add NameVirtualHost *:443 here, you will also have to change
# the VirtualHost statement in /etc/apache2/sites-available/default-ssl
# to
# Server Name Indication for SSL named virtual hosts is currently not
# supported by MSIE on Windows XP.
Listen 443
```

Within your **/etc/apache2/apache2.conf** towards the bottom of the configuration file add

```
NameVirtualHost *:8080
```

For each virtual host you need to alter your VirtualHost directives to listen on **127.0.0.1:8080** Do a quick restart of the Apache2 and the Nginx Services so the changes take effect.

```bash
$ sudo /etc/init.d/apache2 restart
$ sudo nginx -s reload
```

Hopefully things are still working, if your browser is getting stuck in a redirect loop, try restarting your browser as it caches the Headers.

### Setting Up Puma

```bash
$ gem install puma
```

The next thing to do is create a site configuration file in Nginx which will redirect requests to the Puma process. Place it in the **/etc/nginx/sites-available/** directory and create a symbolic link in the **/etc/nginx/sites-enabled** directory.

```bash
$ sudo touch /etc/nginx/sites-available/rails-app.com
$ ln -s /etc/nginx/sites-available/rails-app.com /etc/nginx/sites-enabled/rails-app.com
```

Copy the configuration file below into the file we just created

```
upstream rails-app.com { server 127.0.0.1:9292; }

server {

    listen 80;

    server_name rails-app.com www.rails-app.com;
    try_files $uri/index.html $uri @rails-app.com;

    location @rails-app.com {

        proxy_redirect off;
        proxy_pass http://rails-app.com;
        proxy_set_header Host rails-app.com;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

}
```

Navigate to the root of where your Rails/Sinatra application will be based and run the following command, This command essentially runs Puma as a daemon and forces it to bind to 127.0.0.1:9292. It also creates a .pid file to make it easier to restart after you make changes to your web application.

```bash
RAILS_ENV=production bundle exec puma -e production -b tcp://127.0.0.1:9292 -d --pidfile /var/run/puma.pid
```

Restart Nginx so the changes occur and that should be it, everything should be working, with PHP based websites and Ruby based websites getting served through Nginx. Pretty cool huh? To restart the Puma process run the following command

```bash
kill -s SIGUSR2 `cat /var/run/puma.pid`
```
