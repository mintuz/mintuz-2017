webpackJsonp([0x8c287a51a804],{312:function(e,a){e.exports={data:{site:{siteMetadata:{siteTitle:"Mintuz",siteTitlePrefix:"CSS, Javascript and Web Performance",googleVerification:"RnXDiD3_kyC6xc4y2AbSsJoXcLZvza1W7rYVHBGA89M",locale:"en_GB",siteUrl:"https://mintuz.com",author:"Adam Bulmer",keywords:["Web Performance","Web Developer","Web Developer Manchester","Software Engineer Manchester","ReactJS","React","React Components"],description:"Software Engineer from Manchester writing posts on CSS, React, JavaScript and Web Performance.",twitterHandle:"@mintuz"}},markdownRemark:{id:"/Users/bulmera/personal/mintuz-2017/src/posts/2013-07-28-nginx-reverse-proxy/index.md absPath of file >>> MarkdownRemark",html:'<p>I decided to alter my web server setup after realising a standard Apache 2 install comes with too much overhead whilst serving out static content. At the same time I thought it would be a good opportunity to look into different methods of serving web applications written in ruby, primarily Rails and Sinatra. Originally my web server was running Apache2 with libapache2-mod-php5 and mysql. Nothing special about it, infact it was pretty basic. For serving out ruby applications I used <a href="https://www.phusionpassenger.com/">mod_passenger</a> developed by Phusion.</p>\n<h2><strong>Benchmark</strong></h2>\n<p>using Apache benchmark for 5 seconds and sending 100 requests my old setup had a mean average of 0.40 requests per second across 10 tests. After altering my setup to what will be discussed further on in this blog post, the mean average requests per second were increased to 8.97. That is a drastic increase and you can really tell the difference especially with loading large images.</p>\n<h2><strong>The New Setup</strong></h2>\n<p>I have setup my web server to use Apache 2 and Puma with Nginx as a reverse proxy listening on port 80. This allows you to serve out ruby based applications and PHP based websites driven by content management systems such as Wordpress.</p>\n<h3>Setting up Nginx with Apache 2</h3>\n<p>Lets get started, First we will setup Nginx to be the Reverse Proxy in front of Apache 2, I am using Ubuntu 12.04 so I use aptitude as my package manager.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx</code></pre>\n      </div>\n<p>The first thing to do is alter your default site configuration located in** /etc/nginx/sites-availble/** to look like the configuration below. This is used to serve out PHP based websites mainly running Wordpress. Thanks to <a href="http://www.applicious.co/2013/06/upgraded-to-nginx/">@iceicetimmy</a> for providing the basis of this config. [work] I have made a few alterations for my scenario such as adding default to the listen directive, doing this forces the server block to run as the default configuration. Without it, the Puma server block further down would override it causing every website to redirect to your ruby applications. I also removed the <strong>rewrite ^(.*) $scheme</strong> line because it simply breaks.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">server {\n\n        listen 80 default;\n    index index.php;\n        rewrite /wp-admin$ $scheme://$host$uri/ permanent;\n\n        location = /favicon.ico {\n                log_not_found off;\n                access_log off;\n        }\n\n        location = /robots.txt {\n                allow all;\n                log_not_found off;\n                access_log off;\n        }\n\n        location ~ /\\. {\n                deny all;\n        }\n\n        location ~* /(?:uploads|files)/.*\\.php$ {\n                deny all;\n        }\n\n        location / {\n\n            proxy_pass http://127.0.0.1:8080;\n                proxy_set_header X-Real-IP $remote_addr;\n                proxy_set_header X-Forwarded-For $remote_addr;\n                proxy_set_header Host $host;\n\n    }\n\n}</code></pre>\n      </div>\n<p>The next step is to configure Apache 2 to listen on port 8080 instead of the standard 80. Change <strong>/etc/apache2/ports.conf</strong> to look similar to this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"># If you just change the port or add more ports here, you will likely also\n# have to change the VirtualHost statement in\n# /etc/apache2/sites-enabled/000-default\n# This is also true if you have upgraded from before 2.2.9-3 (i.e. from\n# Debian etch). See /usr/share/doc/apache2.2-common/NEWS.Debian.gz and\n# README.Debian.gz\n\nNameVirtualHost 127.0.0.1:8080\nListen 8080\n\n# If you add NameVirtualHost *:443 here, you will also have to change\n# the VirtualHost statement in /etc/apache2/sites-available/default-ssl\n# to\n# Server Name Indication for SSL named virtual hosts is currently not\n# supported by MSIE on Windows XP.\nListen 443</code></pre>\n      </div>\n<p>Within your <strong>/etc/apache2/apache2.conf</strong> towards the bottom of the configuration file add</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">NameVirtualHost *:8080</code></pre>\n      </div>\n<p>For each virtual host you need to alter your VirtualHost directives to listen on <strong>127.0.0.1:8080</strong> Do a quick restart of the Apache2 and the Nginx Services so the changes take effect.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> /etc/init.d/apache2 restart\n$ <span class="token function">sudo</span> nginx -s reload</code></pre>\n      </div>\n<p>Hopefully things are still working, if your browser is getting stuck in a redirect loop, try restarting your browser as it caches the Headers.</p>\n<h3>Setting Up Puma</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ gem <span class="token function">install</span> puma</code></pre>\n      </div>\n<p>The next thing to do is create a site configuration file in Nginx which will redirect requests to the Puma process. Place it in the <strong>/etc/nginx/sites-available/</strong> directory and create a symbolic link in the <strong>/etc/nginx/sites-enabled</strong> directory.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">touch</span> /etc/nginx/sites-available/rails-app.com\n$ <span class="token function">ln</span> -s /etc/nginx/sites-available/rails-app.com /etc/nginx/sites-enabled/rails-app.com</code></pre>\n      </div>\n<p>Copy the configuration file below into the file we just created</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">upstream rails-app.com { server 127.0.0.1:9292; }\n\nserver {\n\n    listen 80;\n\n    server_name rails-app.com www.rails-app.com;\n    try_files $uri/index.html $uri @rails-app.com;\n\n    location @rails-app.com {\n\n        proxy_redirect off;\n        proxy_pass http://rails-app.com;\n        proxy_set_header Host rails-app.com;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n}</code></pre>\n      </div>\n<p>Navigate to the root of where your Rails/Sinatra application will be based and run the following command, This command essentially runs Puma as a daemon and forces it to bind to 127.0.0.1:9292. It also creates a .pid file to make it easier to restart after you make changes to your web application.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">RAILS_ENV<span class="token operator">=</span>production bundle <span class="token function">exec</span> puma -e production -b tcp://127.0.0.1:9292 -d --pidfile /var/run/puma.pid</code></pre>\n      </div>\n<p>Restart Nginx so the changes occur and that should be it, everything should be working, with PHP based websites and Ruby based websites getting served through Nginx. Pretty cool huh? To restart the Puma process run the following command</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">kill</span> -s SIGUSR2 <span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> /var/run/puma.pid<span class="token variable">`</span></span></code></pre>\n      </div>',excerpt:"I decided to alter my web server setup after realising a standard Apache 2 install comes with too much overhead whilst serving out static…",frontmatter:{path:"/2013/07/28/nginx-reverse-proxy-with-apache-2-and-puma",features:"cta-contact",title:"Nginx Reverse Proxy with Apache 2 and Puma",date:"July 28, 2013"}}},pathContext:{path:"/2013/07/28/nginx-reverse-proxy-with-apache-2-and-puma"}}}});
//# sourceMappingURL=path---2013-07-28-nginx-reverse-proxy-with-apache-2-and-puma-93dddaa17000835102cf.js.map