# Frequently asked question (FAQ)

## Is the bioreactor rebooting?

In case the lower priority process can not be reached during 8s, the bioreactor will restart
automatically. This lower priority process is the one that takes care of blinking the
led.

Using the command `p` you will get the uptime in milliseconds.

In the of reboot there is also an entry in the log.

## What is the state of the bioreactor?

The command `t` will give you a good overview about the current state of the bioreactor

Status: 519 - What is the current status

- 0: 1 - heating
- 1: 1 - agitation control
- 2: 1 - food control
- 9: 1 - emptying pump

Enabled: 7 - What is currently enabled

- 0: 1 - heating
- 1: 1 - agitation control
- 2: 1 - food control

Error: 0 - What are the current errors

- 0: 0 - pcb probe failed (one wire not answering)
- 1: 0 - liquid probe failed (one wire not answering)
- 2: 0 - temperature of pcb is outside range
- 3: 0 - temperature of liquid is outside range
- 4: 0 - target temperature is outside range
- 5: 0 - weight is outside range

## What is a cycle?

The bioreactor has 4 different phases :

Mode               | Heating | Stepper | Till when it last
-------------------|---------|---------|----------------------------------------
Normal mode        |   On    |   On    | Last [PARAM_FILLED_TIME](../10_platformio/20_parameters.md) minutes
Sedimentation mode |   Off   |   Off   | Last [PARAM_SEDIMENTATION_TIME](../10_platformio/20_parameters.md) minutes
Pumping out        |   Off   |   Off   | Last till [PARAM_WEIGHT_MIN](../10_platformio/20_parameters.md) is reached
Pumping in         |   On    |   On    | Last till [PARAM_WEIGHT_MAX](../10_platformio/20_parameters.md) is reached

## Why does it read wrong weight values?

There are many differents problems that you can find with the weight reading, but you can check this steps:

1. The load cells work in one direction, so you need to check if you place in the wrong direction every load cell (see note).

2. Maybe you don't put the solder jumper between LGND and GND near to HX711 (SJ1 in version 6.0.1). In this case, to avoid a floating ground you need to made the solder jumper in that point.

3. Some load cell cable isn't weld correctly in the load cell PCB. Check [Load cell](../20_making/60_weight/index.md) page.

:::note
The correct direction for every load cell is the arrow start in the [Top plate](../20_making/10_assembling/30_top.md) and finish in the air, ready to touch the [Heating plate base](../20_making/10_assembling/20_heating.md).
:::
