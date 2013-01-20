#!/usr/bin/python

import serial
import httplib
import urllib

ser = serial.Serial('/dev/tty.usbmodem621', 9600)
var = 1
i = 0
plantamount=0
while var == 1 :  # This constructs an infinite loop
    var2 = ser.readline()
    var2 = var2.rstrip()
    if var2 in ['*write*']:
    	    pnum=ser.readline().rstrip()
    	    mval=ser.readline().rstrip()
    	    sval=ser.readline().rstrip()
    	    wat=ser.readline().rstrip()
    	    print("Plant number, moisture value, sensor value and watering times:")
	    print pnum
    	    print mval
    	    print sval
    	    print wat
    	    #Connect to server
    	    httpServ = \
    	    httplib.HTTPConnection("127.0.0.1", 80)
    	    httpServ.connect()
    	    params = urllib.urlencode({'plant_num': pnum, 'moisture_val': mval, 'sensor_val': sval, 'watered': wat})
    	    f = urllib.urlopen("http://localhost/webwet/putvalsarduino.php?%s" % params)
    	    httpServ.request('GET', f.geturl())
    	    httpServ.close()
    elif var2 in ['*read*']:
    	    #Connect to server
    	    httpServ = \
    	    httplib.HTTPConnection("127.0.0.1", 80)
    	    httpServ.connect()
    	    #Send Get html request
    	    httpServ.request('GET', "/webwet/getvalsarduino.php")
    	    #Wait for response
    	    response = httpServ.getresponse()
    	    vastaus = (response.read())
    	    ser.write(vastaus)
	    print vastaus
	    httpServ.close()
    elif var2 in ['*nowater*']:
    	    waterempty=ser.readline().rstrip()
    	    print("Is water reservoir empty:")
	    print waterempty
    	    #Connect to server
    	    httpServ = \
    	    httplib.HTTPConnection("127.0.0.1", 80)
    	    httpServ.connect()
    	    params = urllib.urlencode({'waterval': waterempty})
    	    f = urllib.urlopen("http://localhost/webwet/putwatervalarduino.php?%s" % params)
    	    httpServ.request('GET', f.geturl())
    	    httpServ.close()
