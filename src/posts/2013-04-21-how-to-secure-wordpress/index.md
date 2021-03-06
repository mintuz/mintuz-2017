---
title: Securing Wordpress
date: "2013-04-21T22:40:32.169Z"
path: "/2013/04/21/how-to-secure-wordpress"
type: "post"
features: "cta-contact"
---

Let me start by saying Wordpress is an **extremely secure platform** and is in fact exploited due to poorly written 3rd party plugins and uneducated Wordpress users. This is a brief overview of the things you can do to detect issues with your Wordpress site and how to secure it.

There is a large spread attack happening across the Internet aimed towards Wordpress at the moment (14/04/2013). The series of online attacks designed to break into poorly-secured **WordPress** blogs is fuelling the growth of an unusually powerful botnet currently made up of more than 90,000 Web servers. This attack is using a typical **brute force attack against passwords**.

Every attack against a computer system starts with reconnaissance which is the gathering of as much information as possible against the target. In terms of **Wordpress security**, Information from the Whois database and data exposed fron the website itself is extremely useful.

Tools like [wp-scan](http://wpscan.org/) allow you to find out what plugins are running on the Wordpress installation and the names of the users on that system. With this information you have already lost half the battle. I urge you to download and install wp-scan. It's simple to use but extremely powerful. It alerts you of any vulnerable plugins and if this occurs, you should instantly disable those plugins. The chances are it will also display one or more usernames, if you have your username as admin, please open a new tab, login to your Wordpress site and rename your admin user then come back and carry on reading.

If an attacker has a good password dictionary and you have a weak password, congratulations your website could be hacked. For password requirements you should read the [security requirements](http://en.support.wordpress.com/selecting-a-strong-password/) specified on the WordPress website. You should also [restrict access](http://codex.wordpress.org/Hardening_WordPress) to the wp-admin section of your website to only allow access from specific IP addresses. If you want to go to extreme lengths you can also take advantage of a[ third-party plugin from Duo Security](https://www.duosecurity.com/product), which enables one-time login codes sent via text message.

Now the way this attack works is from scanning domains for information such as strings like wp-content and wp-admin. If the bot finds a website with these strings present, it will simply spam the wp-login.php page with requests using the usernames found from tools like wp-scan and a password dictionary possibly using words from the website itself.

Tools like [xHydra](http://www.thc.org/thc-hydra/) allow such attacks to be carried out. **wp-scan and xHyrdra together are bad news for Wordpress sites. **To help reduce the risk of these tools, I urge you to download the wp-security plugin. You can configure the plugin to block an IP address from accessing your website if that IP address has multiple incorrect login attempts. It also allows you to rename the wp-content and wp-admin parts of the URL.
