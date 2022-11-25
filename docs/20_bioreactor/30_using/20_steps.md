# Steps

We create a compact way to describe a set of instruction

## Flags

| BIT | PARAM_STATUS | COMMENT                          |
| --- | ------------ | -------------------------------- |
| 0   | PID          | enable/disable heating           |
| 1   | Stepper      | enable/disable agitation control |
| 2   | OUTPUT 1     | enable/disable output 1          |
| 3   | OUTPUT 2     | enable/disable output 2          |
| 4   | OUTPUT 3     | enable/disable output 3          |
| 5   | OUTPUT 4     | enable/disable output 4          |

## Actions

0 xxx x yyy yyyy yyyy

|     | xxxx | Action                                                        |
| --- | ---- | ------------------------------------------------------------- |
| 0   | 0000 | Do nothing                                                    |
| 1   | 0001 | Wait in minutes                                               |
| 2   | 0010 | Wait in hours                                                 |
| 3   | 0011 | Wait for weight reduction to yy% of maximum weight            |
| 4   | 0100 | Wait for weight increase to yy% of maximum weight             |
| 5   | 0101 | Wait for temperature change (continue if delta < yy [°C/100]) |
| 8   | 1000 | Set all the flags                                             |

## Change parameters

1 xxx x yyy yyyy yyyy

- xxxx the parameter (0 -> 15)
  - 0: Target temperature (in °C)
- yyy yyyy yyyy: the new value (0 to 2047)

## Examples

### Example 1

Using two peristaltic pumps to remove bacteria and add fresh media:

| Step | Instruction                  | Explanation                    |
| ---- | ---------------------------- | ------------------------------ |
| 0    | 0 1000 000 0000 0011 (16387) | Stepper: on, PID: on           |
| 1    | 0 0010 000 0001 1000 (4120)  | Wait 1 day (24 h)              |
| 2    | 0 1000 000 0000 0000 (16384) | Stepper: off, PID: off         |
| 3    | 0 0001 000 0001 1110 (2078)  | Wait 30 min                    |
| 4    | 0 1000 000 0000 0100 (16388) | OUT1: on                       |
| 5    | 0 0011 000 0001 1110 (6174)  | Weight reduction 30 %          |
| 6    | 0 1000 000 0000 1011 (16395) | OUT2: on, Stepper: on, PID: on |
| 7    | 0 0100 000 0110 0100 (8292)  | Weight increase 100 %          |
| 8-15 | 0 0000 000 0000 0000 (0)     | Do nothing                     |

### Example 2

Changing temperature and turning on / off a light (on IO3). We simulate a day / night cycle:

| Step | Instruction                  | Explanation                     |
| ---- | ---------------------------- | ------------------------------- |
| 0    | 0 1000 000 0001 0011 (16403) | IO3: on, Stepper: on, PID: on   |
| 1    | 1 0000 000 0010 1000 (32808) | Set target temperature to 40 °C |
| 2    | 0 0010 000 0000 1100 (4108)  | Wait 12 h                       |
| 3    | 0 1000 000 0000 0011 (16387) | IO3: off, Stepper: on, PID: on  |
| 4    | 1 0000 000 0001 1110 (32798) | Set target temperature to 30 °C |
| 5    | 0 0010 000 0000 1100 (4108)  | Wait 12 h                       |
| 6-15 | 0 0000 000 0000 0000 (0)     | Do nothing                      |

### Example 3

Run bioreactor with temperature control, agitation control, and adding fresh media in steps of 25% of maximum weight every 30 minutes; when it obtains 100% weight it continues for 16 hours.

| Step | Instruction                  | Explanation                    |
| ---- | ---------------------------- | ------------------------------ |
| 0    | 0 1000 000 0000 0111 (16391) | IO1: on, Stepper: on, PID: on  |
| 1    | 0 0100 000 0001 1001 (8217)  | Weight increase until 25 %     |
| 2    | 0 1000 000 0000 0011 (16387) | IO1: off, Stepper: on, PID: on |
| 3    | 0 0001 000 0001 1110 (2078)  | Wait 30 min                    |
| 4    | 0 1000 000 0000 0111 (16391) | IO1: on, Stepper: on, PID: on  |
| 5    | 0 0100 000 0011 0010 (8242)  | Weight increase until 50 %     |
| 6    | 0 1000 000 0000 0011 (16387) | IO1: off, Stepper: on, PID: on |
| 7    | 0 0001 000 0001 1110 (2078)  | Wait 30 min                    |
| 8    | 0 1000 000 0000 0111 (16391) | IO1: on, Stepper: on, PID: on  |
| 9    | 0 0100 000 0100 1011 (8267)  | Weight increase until 75 %     |
| 10   | 0 1000 000 0000 0011 (16387) | IO1: off, Stepper: on, PID: on |
| 11   | 0 0001 000 0001 1110 (2078)  | Wait 30 min                    |
| 12   | 0 1000 000 0000 0111 (16391) | IO1: on, Stepper: on, PID: on  |
| 13   | 0 0100 000 0110 0100 (8292)  | Weight increase until 75 %     |
| 14   | 0 1000 000 0000 0011 (16387) | IO1: off, Stepper: on, PID: on |
| 15   | 0 0010 000 0001 0000 (4112)  | Wait 16 h                      |
