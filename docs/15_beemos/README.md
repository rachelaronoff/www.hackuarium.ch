---
slug: /beemos
---

# Beemos

Bee monitoring system

![logoBeeMoS.png](logoBeeMoS.png)

Board: [ESP32-C3 Mini Lolin](https://www.wemos.cc/en/latest/c3/c3_mini.html)

Current pin assignments:

| GPIO PIN  | PURPOSE          | DESCRIPTION                                                                            | 
| --------- | ---------------- | --------------------------------------------------- |
| 1         | Not assigned yet |
| 2         | Not assigned yet |
| 3         | I2C SDA          | I2C is used to control Si7021 temperature and humidity sensor as well as other devices (scale, light measurements...)
| 4         | I2C SCL          | I2C can be set on any pair of GPIO pins, the code must explicitly specify those pins (with Wire.begin(SDA,SCL) *e.g.* Wire.begin(3,4)
| 5         | Not assigned yet |
| 6         | 1-Wire           | The 1-Wire protocol allows to connect multiple [DS18B20](https://datasheets.maximintegrated.com/en/ds/DS18B20.pdf) temperature probes to the same pin.
| 7         | Builtin LED      | This pin is used for the "Blink" task which is the lowest priority task blinking the LED. It allows to detect in case the board is in a frozen state or reboots frequently by observing the LED blink pattern (or absence of blinking). 
| 8         | Not assigned yet |
| 9         | Pin not exposed, internally used for button switch |
| 10        | Not assigned yet |
                           
