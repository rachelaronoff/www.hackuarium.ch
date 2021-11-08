##

We create a compact way to describe a set of instruction

Flags:

- 0 : PID
- 1 : Stepper
- 2 : OUT1
- 3 : OUT2
- 4 : OUT3
- 5 : OUT4

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
  - 8: Minimum weight (in gr.)
  - 9: Maximum weight (in gr.)
- yyy yyyy yyyy: the new value (0 to 2047)

### Example

Using two peristaltic pumps to remove bacteria and add fresh media

| Step | Instruction                 | Explanation                    |
| ---- | --------------------------- | ------------------------------ |
| 0    | 01000 000 0000 0011 (16387) | Stepper: on, PID: on           |
| 1    | 00010 000 0001 1000 (4120)  | Wait 1 day (24 h)              |
| 2    | 01000 000 0000 0000 (16384) | Stepper: off, PID: off         |
| 3    | 00001 000 0001 1110 (2078)  | Wait 30 min                    |
| 4    | 01000 000 0000 0100 (16388) | OUT1: on                       |
| 5    | 00011 000 0001 1110 (6174)  | Weight reduction 30%           |
| 6    | 01000 000 0000 1011 (16395) | OUT2: on, Stepper: on, PID: on |
| 7    | 00011 000 0001 1110 (6174)  | Weight increase 100%           |
| 8-15 | 00000 000 0000 0000 (0)     | Do nothing                     |

Changing temperature and turning on / off a light (on IO3).
We simulate a day / night cycle

| Step | Instruction         | Explanation                    |
| ---- | ------------------- | ------------------------------ |
| 0    | 01000 000 0001 0011 | IO3: on, Stepper: on, PID: on  |
| 1    | 10000 000 0010 1000 | Set target temperature to 40°C |
| 2    | 00010 000 0000 1100 | Wait 12h                       |
| 3    | 01000 000 0000 0011 | IO3: off, Stepper: on, PID: on |
| 4    | 10000 000 0001 1110 | Set target temperature to 30°C |
| 5    | 00010 000 0000 1100 | Wait 12h                       |
| 6-15 | 00000 000 0000 0000 | Do nothing                     |
