# Parameters

All the functionalities and the communication between processes is ensured by a common list of parameters.
The first 26 parameters (A -> Z) will be saved regularly in the log. These values will be recovered when the bioreactor reboots.

| ID  | P   | NAME                          | DESCRIPTION                                                         |
| --- | --- | ----------------------------- | ------------------------------------------------------------------- |
| 0   | A   | PARAM_TEMP_EXT1               | Temperature of the solution (top)                                   |
| 1   | B   | PARAM_TEMP_EXT2               | Temperature of the solution (bottom)                                |
| 2   | C   | PARAM_TEMP_PCB                | Temperature of the PCB                                              |
| 3   | D   | PARAM_PID                     | Current heating power                                               |
| 4   | E   | PARAM_TEMP_TARGET             | Target temperature of the liquid (in °C)                            |
| 5   | F   | PARAM_WEIGHT                  | Weight (In unit of the balance)                                     |
| 6   | G   | PARAM_WEIGHT_G                | Weight (gr)                                                         |
| 7   | H   | PARAM_WEIGHT_SINCE_LAST_EVENT | Save the last weight to avoid problems when there are power outages |
| 8   | I   | PARAM_WEIGHT_MAX              | Weight value for high level                                         |
| 22  | W   | PARAM_CURRENT_STEP            | Enable protocol of bioreactor                                       |
| 23  | X   | PARAM_CURRENT_WAIT_TIME       | Waiting time before start protocol                                  |
| 24  | Y   | PARAM_ERROR                   | Error in the system                                                 |
| 25  | Z   | PARAM_ENABLED                 | Currently active service                                            |
| 26  | AA  | PARAM_STEPPER_SPEED           | Motor speed                                                         |
| 27  | AB  | PARAM_STEPPER_STEPS           | Number of steps before changing the direction of the motor          |
| 28  | AC  | PARAM_STEPPER_WAIT            | Wait time in seconds between change direction                       |
| 29  | AD  | PARAM_WEIGHT_FACTOR           | Weight calibration: conversion factor digital -> gr                 |
| 30  | AE  | PARAM_WEIGHT_EMPTY            | Weight calibration: digital offset value when bioreactor is empty   |
| 31  | AF  | PARAM_SEDIMENTATION_TIME      | Number of minutes to wait without rotation before emptying          |
| 32  | AG  | PARAM_FILLED_TIME             | Number of minutes to stay in the filled state                       |
| 51  | AZ  | PARAM_ENABLED                 | Enabled service (set by user)                                       |

## Other planned parameters

Others variables are consider with aditional modules that you can connect to the biorector via RJ12 port.

| ID  | PARAM | PARAM NAME              | DESCRIPTION                                                                                                          |
| --- | ----- | ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
|     |       | PARAM_PH                | Current pH                                                                                                           |
|     |       | PARAM_PH_STATE          | 0: Pause 1 : normal acquisition, 2 : purge of pipes, 4: calibration pH=4, 7: calibration pH=7, 10: calibration pH=10 |
|     |       | PARAM_FLUX_GAS1         |                                                                                                                      |
|     |       | PARAM_FLUX_GAS2         |                                                                                                                      |
|     |       | PARAM_FLUX_GAS3         |                                                                                                                      |
|     |       | PARAM_FLUX_GAS4         |                                                                                                                      |
|     |       | PARAM_CONDUCTIVITY      |                                                                                                                      |
| 35  | AJ    | PARAM_TARGET_PH         | Desired pH                                                                                                           |
| 36  | AK    | PARAM_PH_FACTOR_A       |                                                                                                                      |
| 37  | AL    | PARAM_PH_FACTOR_B       |                                                                                                                      |
| 39  | AN    | PARAM_DESIRED_FLUX_GAS1 |                                                                                                                      |
| 40  | AO    | PARAM_DESIRED_FLUX_GAS2 |                                                                                                                      |
| 41  | AP    | PARAM_DESIRED_FLUX_GAS3 |                                                                                                                      |
| 42  | AQ    | PARAM_DESIRED_FLUX_GAS4 |                                                                                                                      |
| 43  | AR    | PARAM_ANEMO_OFFSET1     | Anemometer calibration: offset of the digital value (digital value when no gas is flowing)                           |
| 44  | AS    | PARAM_ANEMO_OFFSET2     |                                                                                                                      |
| 45  | AT    | PARAM_ANEMO_OFFSET3     |                                                                                                                      |
| 46  | AU    | PARAM_ANEMO_OFFSET4     |                                                                                                                      |
| 47  | AV    | PARAM_ANEMO_FACTOR1     | Anemometer calibration factor: conversion between gas flux (of air) and digital unit                                 |
| 48  | AW    | PARAM_ANEMO_FACTOR2     |                                                                                                                      |
| 49  | AX    | PARAM_ANEMO_FACTOR3     |                                                                                                                      |
| 50  | AY    | PARAM_ANEMO_FACTOR4     |                                                                                                                      |

# State machine

There are 3 important variables that will manage the state of the bioreactor:

- `PARAM_ENABLED`: the functions that are currently enabled
- `PARAM_STATUS`: the current status of the bioreactor
- `PARAM_ERROR`: if there is any error in one of the processes

:::info
The `PARAM_ENABLED (Z)` will allow to activate or deactivate some function of the bioreactor. It is for example possible to disable heating while keeping all the other functionalities active.
:::

## PARAM_ENABLED

`PARAM_ENABLED (Z)` allows to enable or disable some functionalities of the bioreactor. Currently, it can control heating, agitation and food control.

| BIT | PARAM_STATUS         | COMMENT                          |
| --- | -------------------- | -------------------------------- |
| 0   | FLAG_PID_CONTROL     | enable/disable heating           |
| 1   | FLAG_STEPPER_CONTROL | enable/disable agitation control |
| 2   | FLAG_OUTPUT_1        | enable/disable food control      |
| 3   | FLAG_OUTPUT_2        | enable/disable food control      |
| 4   | FLAG_OUTPUT_3        | enable/disable food control      |
| 5   | FLAG_OUTPUT_4        | enable/disable food control      |

:::tip
If you want to control everything the value of `PARAM_ENABLED` should be 63.
:::

## PARAM_STATUS

`PARAM_STATUS (AZ)` will display the currently active functionalities. It is composed of different bits that can
be enabled or disabled using the method `start` and `stop`. You may also check the status of one of the functions using `getStatus`.

| BIT | PARAM_STATUS         | COMMENT                                                          |
| --- | -------------------- | ---------------------------------------------------------------- |
| 0   | FLAG_PID_CONTROL     | Enable/disable heating                                           |
| 1   | FLAG_STEPPER_CONTROL | Enable/disable agitation control                                 |
| 2   | FLAG_OUTPUT_1        | Enable/disable food control                                      |
| 3   | FLAG_OUTPUT_2        | Enable/disable food control                                      |
| 4   | FLAG_OUTPUT_3        | Enable/disable food control                                      |
| 5   | FLAG_OUTPUT_4        | Enable/disable food control                                      |
| 6   | FLAG_PH_CONTROL      | Enable/disable pH control                                        |
| 7   | FLAG_GAS_CONTROL     | Enable/disable gas control                                       |
| 8   | FLAG_SEDIMENTATION   | Enable/disable sedimentation (one of the phases of food control) |
| 9   | FLAG_RELAY_FILLING   | Enable/disable filling pump (one of the phases of food control)  |
| 10  | FLAG_RELAY_EMPTYING  | Enable/disable emptying pump (one of the phases of food control) |
| 11  | FLAG_PH_CALIBRATE    | Enable/disable pH calibration                                    |
| 12  | FLAG_RELAY_ACID      | Enable/disable acid addition                                     |
| 13  | FLAG_RELAY_BASE      | Enable/disable base addition                                     |

The status is currently the `AZ` parameter. You can change the status by changing this value. For example, if you want to force the bioreactor to go in the emptying state you should ensure that the bits for the outputs, let's say `FLAG_OUTPUT_1` & `FLAG_OUTPUT_3` are set. In other words, you may have to add `2^2 (4) + 2^4 (16) = 20` to your value of the parameter `AZ` (in the case it was not yet enabled). Same procedure is to be implemented for filling and all commands.

:::danger
The param `PARAM_STATUS` is the main control when you are running the bioreactor protocol, be sure that those manual changes do not affect your actual test.
:::

## PARAM_ERROR

`PARAM_ERROR (Y)` will display any error in the bioreactor, you can check the code of the error with this table:

| BIT | PARAM_ERROR                  | COMMENT                                                    |
| --- | ---------------------------- | ---------------------------------------------------------- |
| 0   | FLAG_TEMP_PCB_PROBE_ERROR    | Pcb probe failed (one wire not answering)                  |
| 1   | FLAG_TEMP_LIQ_PROBE1_ERROR   | Liquid probe in the top failed (one wire not answering)    |
| 2   | FLAG_TEMP_LIQ_PROBE2_ERROR   | Liquid probe in the bottom failed (one wire not answering) |
| 3   | FLAG_TEMP_PCB_RANGE_ERROR    | Temperature of pcb is outside range                        |
| 4   | FLAG_TEMP_LIQ_RANGE1_ERROR   | Temperature of liquid in the top is outside range          |
| 5   | FLAG_TEMP_LIQ_RANGE2_ERROR   | Temperature of liquid in the bottom is outside range       |
| 6   | FLAG_TEMP_TARGET_RANGE_ERROR | Target temperature is outside range                        |
| 7   | FLAG_WEIGHT_RANGE_ERROR      | Weight is outside range                                    |

:::tip
Always have this information at hand, you never know when it can be very helpful.
:::
