# Soldering the PCB

The first step in the construction of the spectophotometer is to solder the electonic board. The board actually comes presoldered with all of the surface mouted (SMD) components, but the through-hole components have to be soldered by hand. Don't worry if you've never soldered anything: the process is relatively simple.

First, take all the component of bag B out. You should have the following components in front of you:

1. Potentiometer
2. Battery connector
3. Light detector
4. UV LED (with the black strip around it)
5. RBG LED
6. Rotary push button
7. LCD screen
8. Single row straight pins header for the screen

// picture

You can take the PCB out of it's bag. The PCB has two faces, which well refer to as face 1 and face 2. Be careful which components are soldered on which face!

// picture

You can now turn your soldering iron on and set it on around 350 degrees Celcius.
:::caution
The iron's really hot, so don't burn yourself, it hurts...
:::

:::info
Solder generally contains lead, which is toxic. Avoid breathing in any fumes and wash your hands carefully after you finished soldering.
Here, we had some solder with 37% of lead (Pb).

![solder.jpg](solder.JPG)
:::

So now that the warnings were made, let's jump right in.

## 1) Pins on screen

The first step is to solder the array of pins on the LCD screen. Place the pins in the wholes on the screen board and solder all the pins. Be sure to have the pins well perpendicular to the screen.
![screen1.jpg](screen1.JPG)
![screen2.jpg](screen3.JPG)
:::tip
To ensure that the pins are perpendicular to the screen, first solder one pin, then correct the position if necessary by reheating the solder you just made. Then solder the remaining pins.
![](screen2.JPG)
:::

You can now leave the screen on the side for a bit: we used it as a soldering warmup.

## 2) Potentiometer

Next, solder the potentiometer in place. Cut the pins short using the wire cutter once soldered. From now on you can cut the pins of all the components that will be soldered.

![pot1.jpg](pot1.JPG)
![pot2.jpg](pot2.JPG)

## 3) RGB LED

:::info
Be careful when soldering the LEDs: for these components, the orientation matters! You can recognise the minus pin of an LED because it is the shortest one, and because there is a flat on that side of the LED. You can feel it with your fingers if you roll the LED between them.
:::

Start by placing the RGB LED on the board in the correct orientation, but don't push until the LED is against the board. Gently bend the pins of the LED towards the square hole until you get an angle of 90 degrees. Now make the side of the LED touch the board and solder it in place.
![led-rgb1.jpg](led-rgb1.JPG)
![led-rgb2.jpg](led-rgb2.JPG)

## 4) UV LED

## 5) Light detector

## 6) Battery connector

## 7) Screen

**On face 2 of the PCB!!!**

## 8) Rotary push button

**On face 2 of the PCB!!!**

## Test the PCB

At this point, you're basically over with the soldering, congrats! You should now plug the battery in the spectrophotometer and check that it work properly. At this point, you also have to set the contrast of the screen. To do that, use the screwdriver to turn the potentiometer until the text is clearly lisible on the screen.

![contrast.jpg](contrast.JPG)
