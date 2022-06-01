---
slug: /beemos
---

# Beemos

Bee monitoring system

![logoBeeMoS.png](logoBeeMoS.png)

# Goal of the project

This on-going project is hosted at the [Hackuarium](http://www.hackuarium.ch/en/) association, a DIY biology hacking-space and open laboratory located in Ecublens (Switzerland).

The goal of the Bee Monitoring System (**BeeMoS**) project is to provide **an open-source hardware and software solution in order to monitor honeybee hives from a distance at a reasonable cost**. Such a system would bring consistent and valuable non-biased data to assist beekeepers in their beekeeping tasks *e.g* to follow how much honey is collected and when to add an extra honey supper or to harvest honey; and to receive personalized alarms *e.g.* in case of swarming and theft. From the bees' perspective, this could allow to minimize the number of bee hive inspections and thereby cause less disturbance.  
In a second phase, data gathering from multiple hives and apiaries could be used to detect abnormalities at a large scale and to build useful models to detect or prevent queen loss, swarming or conditions favorable for bee diseases. 

Why should we care about bees? Western honeybees (*Apis mellifera*) are important insect pollinators that live in colonies of thousands individuals with a single queen. As bee foragers travel from plant to plant to collect nectar and pollen, plant cross‐pollination occurs, allowing plant reproduction and in particular fruit production. Honeybees are estimated to contribute to US$215 billion worth of crops annually worldwide ([Smith *et al.* 2014](https://link.springer.com/article/10.1007/s10393-013-0870-2#ref-CR28)) and to pollinate about one third of the Western world's crop species ([McGregor, 1976](https://books.google.ch/books?hl=fr&lr=&id=nq7q9OrIj_wC&oi=fnd&pg=PA4&dq=McGregor+honeybees&ots=IJFoPpsrZ6&sig=bRym4QdT3gUyErIu9l41YSiKGpI&redir_esc=y#v=onepage&q=McGregor%20honeybees&f=false)).
Despite their importance, honey bees have been facing important declines due to multiple causes including viral and bacterial pests, exposure to pesticides and poor diet due to large-scale monocultures. The automatized large scale monitoring of bees could allow to detect unexpected patterns and to provide data-based evidence on the long run rather than biased interpretations based on a few manual inspections.

# Electronics

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
                           
