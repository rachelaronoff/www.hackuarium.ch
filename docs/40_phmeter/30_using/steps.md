# Steps

:::danger

¡UPDATE 18042022!

:::

We create a compact way to describe a set of instruction

Flags:

- 0 : PID
- 1 : Stepper
- 2 : OUT1
- 3 : OUT2
- 4 : OUT3
- 5 : OUT4

| BIT | PARAM_STATUS | COMMENT                          |
| --- | ------------ | -------------------------------- |
| 0   | PID          | enable/disable heating           |
| 1   | Stepper      | enable/disable agitation control |
| 2   | OUTPUT 1     | enable/disable output 1          |
| 3   | OUTPUT 2     | enable/disable output 2          |
| 4   | OUTPUT 3     | enable/disable output 3          |
| 5   | OUTPUT 4     | enable/disable output 4          |

### Actions

0xxxx yyy yyyy yyyy

|     | xxxx | Action                                                       |
| --- | ---- | ------------------------------------------------------------ |
| 0   | 0000 | Do nothing                                                   |
| 1   | 0001 | Wait in minutes                                              |
| 2   | 0010 | Wait in hours                                                |
| 3   | 0011 | Wait for weight reduction to yy grams                        |
| 4   | 0100 | Wait for weight increase to yy grams                         |
| 5   | 0101 | Wait for temperature change (continue if delta < yyy °C/100) |
| 8   | 1000 | Set all the flags                                            |

### Change parameters

1xxxx yyy yyyy yyyy

- xxxx the parameter (0 -> 15)
  - 4: Target temperature (in °C)
- yyy yyyy yyyy: the new value (0 to 2047)

### Example

Using two peristaltic pumps to remove bacteria and add fresh media

| Step | Instruction                  | Explanation                    |
| ---- | ---------------------------- | ------------------------------ |
| 0    | 0 1000 000 0000 0011 (16387) | Stepper: on, PID: on           |
| 1    | 0 0010 000 0001 1000 (4120)  | Wait 1 day (24 h)              |
| 2    | 0 1000 000 0000 0000 (16384) | Stepper: off, PID: off         |
| 3    | 0 0001 000 0001 1110 (2078)  | Wait 30 min                    |
| 4    | 0 1000 000 0000 0100 (16388) | OUT1: on                       |
| 5    | 0 0011 000 0001 1110 (6174)  | Weight reduction 30%           |
| 6    | 0 1000 000 0000 1011 (16395) | OUT2: on, Stepper: on, PID: on |
| 7    | 0 0100 000 0110 0100 (8292)  | Weight increase 100%           |
| 8-15 | 0 0000 000 0000 0000 (0)     | Do nothing                     |

Changing temperature and turning on / off a light (on IO3).
We simulate a day / night cycle

| Step | Instruction                  | Explanation                    |
| ---- | ---------------------------- | ------------------------------ |
| 0    | 0 1000 000 0001 0011 (16403) | IO3: on, Stepper: on, PID: on  |
| 1    | 1 0000 000 0010 1000 (32808) | Set target temperature to 40°C |
| 2    | 0 0010 000 0000 1100 (4108)  | Wait 12h                       |
| 3    | 0 1000 000 0000 0011 (16387) | IO3: off, Stepper: on, PID: on |
| 4    | 1 0000 000 0001 1110 (32798) | Set target temperature to 30°C |
| 5    | 0 0010 000 0000 1100 (4108)  | Wait 12h                       |
| 6-15 | 0 0000 000 0000 0000 (0)     | Do nothing                     |
