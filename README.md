webwet
======

CONTACT INFORMATION:

Project home page:

http://arpi.valtio.org/2013/01/20/webwet/

My email:

esperanza.glass@gmail.com

IRC channel available on Freenode:

channel #webwet

LICENSING:


USE THIS SOFTWARE AT YOUR OWN RISK. I don't take any responsibility of the possible harm it may cause,
including flooding your apartment or whatever else.

Code I have written is licensed under GPLv3. License file included in gpl-3.0.txt

Other licenses:

JQWidgets:

Non-Commercial License
Do you want to use jQWidgets for a non-profit project? Then you can use jQWidgets for free under the Creative Commons Attribution-NonCommercial 3.0 License.

http://creativecommons.org/licenses/by-nc/3.0/

Highstock:

Non-commercial - Free

Do you want to use Highstock for a personal or non-profit project? Then you can use Highstock for free under the Creative Commons Attribution-NonCommercial 3.0 License.

For non-profit organizations, students, universities, public schools and non-commercial personal websites
For developing and testing applications using Highstock
Source editing allowed

http://creativecommons.org/licenses/by-nc/3.0/

Plant icons are taken from:

Plant designed by Rick Diaz-Granados from The Noun Project


INSTALLATION:

Software NEEDS to be in webwet folder at your root www dir, because that's where arduino is trying to look for it!

Web software needs basic LAMP installation. Database arduino.sql needs to be imported to mysql. Raspberry pi needs arduino
package to be able to use arduinos serial interface. I had to reboot the rpi to get  the connection working 
(probably loaded some modules during reboot). After this you should be able to see the device at /dev/tty* when arduino
is connected to RPi.

Python script needs python-serial library.

Web interface defaults:
username: admin
password:

Tab3 can be used to show web camera. I've used zoneminder (because it is really nice and free surveillance software ^^) and show the stream with:

<img src="http://YOUR.URL/cgi-bin/nph-zms?mode=jpeg&monitor=3&scale=100&maxfps=15&buffer=1000&user=USERNAME&pass=PASSWORD&connkey=914020&rand=1355500785" alt="Edit source in tab3.html to add camera if you got one.


It could be something fancier, I know...

.htaccess files need to be enabled in apache2 server to make logout functionality work. 
.htaccess is used to make html pages run php code that is needed to check user login and make redirects accordingly.
Change in:

/etc/apache2/sites-available/default

        <Directory /var/www/>
                Options Indexes FollowSymLinks MultiViews
                AllowOverride None
                Order allow,deny
                allow from all
                # Uncomment this directive is you want to see apache2's
                # default start page (in /apache2-default) when you go to /
                #RedirectMatch ^/$ /apache2-default/
        </Directory>



AllowOverrride None -> AllowOverride All

After that reload apache:

sudo /etc/init.d/apache2 reload

The software works either with 1) ethernet/wifi shield or 2) serial connection to server

1)

Use irrigation_eth_multiprobe arduino software

2)

Use irrigation_serial_multiprobe arduino software
You need to setup python_serial_script to be running as daemon in server. I used this tutorial to do it:

http://jimmyg.org/blog/2010/python-daemon-init-script.html


It takes care of communicating between arduino 
serial and php. Check that serial bus is correct one and that you got needed python libraries installed:

import serial
import httplib
import urllib

Have fun, fix my code please and ask questions via email, irc or website

thx, hopey ;)
