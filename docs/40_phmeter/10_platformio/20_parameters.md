# Parameters

All the functionalities and the communication between processes are ensured by a common list of parameters.

The first 26 parameters (`A` -> `Z`) will be saved regularly in the log. These values will be recovered when the bioreactor reboots.

| ID  | P   | NAME                | DESCRIPTION                                                                |
| --- | --- | ------------------- | -------------------------------------------------------------------------- |
| 0   | A   | PARAM_TEMP_EXT1     | Temperature of the solution (top)                                          |
| 1   | B   | PARAM_TEMP_EXT2     | Temperature of the solution (bottom)                                       |
| 2   | C   | PARAM_PH            | pH (raw values)                                                            |
| 3   | D   | PARAM_PH_H          | pH in unit of potential of hydrogen                                        |
| 4   | E   | PARAM_PH_TARGET     | Desired pH                                                                 |
| 5   | F   | PARAM_EC            | Electrolytic Conductivity (raw values)                                     |
| 6   | G   | PARAM_EC_US         | Electrolytic Conductivity in unit of &mu;Siemens/cm                           |
| 16  | Q   | PARAM_NUMBER_ACQ    | Number of acquisition of 100 ms that will be taken                         |
| 17  | R   | PARAM_ACTIVE_PROBES | Number of reading values                                                   |
| 18  | S   | PARAM_BATTERY       | Battery voltage (hundredths of volt)                                       |
| 24  | Y   | PARAM_ERROR         | Error in the system                                                        |
| 25  | Z   | PARAM_ENABLED       | Currently active service                                                   |
| 26  | AA  | PARAM_PH_FACTOR     | PH calibration: conversion factor digital -> H                             |
| 27  | AB  | PARAM_PH_NEUTRAL    | PH calibration: digital offset value when bioreactor is full of pure water |
| 28  | AC  | PARAM_EC_FACTOR     | EC calibration: conversion factor digital -> uS                            |
| 29  | AD  | PARAM_EC_NEUTRAL    | EC calibration: digital offset value when bioreactor is full of pure water |
| 51  | AZ  | PARAM_STATUS        | Enabled service (set by user)                                              |

## Other planned parameters

Others variables are consider with aditional modules that you can connect to the biorector via RJ12 port.

| ID  | PARAM | PARAM NAME     | DESCRIPTION                                                                                                          |
| --- | ----- | -------------- | -------------------------------------------------------------------------------------------------------------------- |
|     |       | PARAM_PH_STATE | 0: Pause 1 : normal acquisition, 2 : purge of pipes, 4: calibration pH=4, 7: calibration pH=7, 10: calibration pH=10 |

## State machine

There are 3 important variables that will manage the state of the bioreactor:

- `PARAM_ENABLED`: the functions that are currently enabled
- `PARAM_STATUS`: the current status of the bioreactor
- `PARAM_ERROR`: if there is any error in one of the processes

:::info
The `PARAM_ENABLED` <kbd>Z</kbd> will allow to activate or deactivate some function of the bioreactor. It is for example possible to disable heating while keeping all the other functionalities active.
:::

## PARAM_ENABLED

`PARAM_ENABLED` <kbd>Z</kbd> allows to enable or disable some functionalities of the bioreactor. Currently, it can control heating, agitation and food control.

| BIT | PARAM_ENABLED | COMMENT                                   |
| --- | ------------- | ----------------------------------------- |
| 0   | FLAG_OUTPUT_1 | Enable/disable alkaline control           |
| 1   | FLAG_OUTPUT_2 | Enable/disable acid control               |
| 2   | FLAG_OUTPUT_3 | Enable/disable alkaline/acid aux. control |
| 3   | FLAG_OUTPUT_4 | Enable/disable alkaline/acid aux. control |

:::tip
If you want to control everything the value of `PARAM_ENABLED` should be 63.
:::

## PARAM_STATUS

`PARAM_STATUS` <kbd>AZ</kbd> will display the currently active functionalities. It is composed of different bits that can be enabled or disabled using the method `start` and `stop`. You may also check the status of one of the functions using `getStatus`.

| BIT | PARAM_STATUS            | COMMENT                                   |
| --- | ----------------------- | ----------------------------------------- |
| 0   | FLAG_OUTPUT_1           | Enable/disable alkaline control           |
| 1   | FLAG_OUTPUT_2           | Enable/disable acid control               |
| 2   | FLAG_OUTPUT_3           | Enable/disable alkaline/acid aux. control |
| 3   | FLAG_OUTPUT_4           | Enable/disable alkaline/acid aux. control |
| 4   | FLAG_EC_READING         | Enable/disable EC reading                 |
| 5   | FLAG_PH_CONTROL         | Enable/disable pH control                 |
| 6   | FLAG_PH_CALIBRATE       | Enable/disable pH calibration             |
| 7   | FLAG_RELAY_ACID         | Enable/disable acid addition              |
| 8   | FLAG_RELAY_BASE         | Enable/disable base addition              |
| 9   | FLAG_STATUS_TEST_PROBES | Enable/disable test probes                |

The status is currently the <kbd>AZ</kbd> parameter. You can change the status by changing this value. For example, if you want to force the pHMeter to go in the alkaline state you should ensure that the bits for the outputs, let's say `FLAG_OUTPUT_1` & `FLAG_PH_CONTROL` & `FLAG_RELAY_BASE` are set. In other words, you may have to add `2^0 (1) + 2^5 (32) + 2^8 (256) = 289` to your value of the parameter <kbd>AZ</kbd> (in the case it was not yet enabled). Same procedure is to be implemented for filling and all commands.

:::danger
The param `PARAM_STATUS` is the main control when you are running the bioreactor protocol, be sure that those manual changes do not affect your actual test.
:::

## PARAM_ERROR

`PARAM_ERROR` <kbd>Y</kbd> will display any error in the bioreactor, you can check the code of the error with this table:

| BIT | PARAM_ERROR                | COMMENT                                                    |
| --- | -------------------------- | ---------------------------------------------------------- |
| 0   | FLAG_TEMP_EXT1_PROBE_ERROR | Liquid probe in the top failed (one wire not answering)    |
| 1   | FLAG_TEMP_EXT2_PROBE_ERROR | Liquid probe in the bottom failed (one wire not answering) |
| 2   | FLAG_TEMP_EXT2_RANGE_ERROR | Temperature of liquid in the top is outside range          |
| 3   | FLAG_TEMP_EXT2_RANGE_ERROR | Temperature of liquid in the bottom is outside range       |
| 4   | FLAG_PH_RANGE_ERROR        | pH is outside range                                        |
| 5   | FLAG_EC_RANGE_ERROR        | EC is outside range                                        |

:::tip
Always have this information at hand, you never know when it can be very helpful.
:::
