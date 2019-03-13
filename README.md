# Graylog dashboards rotator via tampermonkey
You can use this userscript for Tampermonkey for rotation dashboards on Graylog.

See more in Example file (ROTATION_TIME = 10).

# How to install
Create a new Tampermonkey script and place the contents of the file "Graylog_dashboards_rotator.js" there.

You should replace some strings:

		// @match        http://GRAYLOG-URL/dashboards/*
Enter your Graylog server URL here.

		ROTATION_TIME = 60; //sec
Replace the value "60" with the value you want.

# Additionally
Also you can use this userscript with [Graylog-scrolling-widgets-via-tampermonkey](https://github.com/vshovkuta/Graylog-scrolling-widgets-via-tampermonkey) together. In this case, you should enter the same "ROTATION_TIME" value. 
