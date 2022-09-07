# EC

For the EC reading, we are checking all the hardware steps to be sure that the signal pass correctly.

## Signal generator

This first test is in the outoput pin for the signal generator, you must to put the oscilloscope probe in the pin 7 for U8 IC like the next picture:

![EC test signal generator](images/ec_hw_test_signal_generator.png)

If everything runs well, you have to obtain a signal plot like this:

![EC signal generator](images/signal_generator.bmp)

The ideal values for this part of the circuit need to be:

| Measurement | Value    |
| :---------- | -------- |
| Voltage Max | 3.3 V    |
| Voltage Min | -3.3 V   |
| Frequency   | 1.76 kHz |

The experimental results are very similiar to this:

![EC signal generator](images/signal_generator_pp.bmp)

![EC raw values](images/ec_raw.svg)

![EC raw values](images/ec_raw.svg)
