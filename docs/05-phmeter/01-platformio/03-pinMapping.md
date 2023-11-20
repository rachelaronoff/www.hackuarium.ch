# Pin mapping

Pin mapping between microcontroller, pHMeter, and Arduino.

| Port | Pin | Arduino Mask        | Alternative functions                         | pH V1.1.2-b                                                        |
| ---- | --- | ------------------- | --------------------------------------------- | ------------------------------------------------------------------ |
| B    | 7   | D11 (PWM)           | OC0A <br /> OC1C <br /> PCINT7 <br /> /RTS    | Pin for Input/Ouput 1 (PWM alkaline food)                          |
| B    | 6   | D10 (PWM)           | OC1B <br /> PCINT6 <br /> OC.4B <br /> ADC13  | Pin for LCD D6                                                     |
| B    | 5   | D9 (PWM)            | OC1A <br /> PCINT5 <br /> /OC.4B <br /> ADC12 | Pin for LCD D5                                                     |
| B    | 4   | D8                  | PCINT4 <br /> ADC11                           | Pin for LCD D4                                                     |
| B    | 3   | MISO                | PDO <br /> MISO <br /> PCINT3                 |
| B    | 2   | MOSI                | PDI <br /> MOSI <br /> PCINT2                 |
| B    | 1   | SCK                 | SCK <br /> PCINT1                             |
| B    | 0   | /SS                 | /SS <br /> PCINT0                             | Ext. temp. 1                                                       |
| C    | 7   | D13 (PWM)           | ICP3 <br /> CLK0 <br /> OC4A                  | LED for check bioreactor code run correctly                        |
| C    | 6   | D5 (PWM)            | OC.3A <br /> /OC4A                            | Pin for LCD D7                                                     |
| D    | 7   | D6 (PWM)            | T0 <br /> OC.4D <br /> ADC10                  | Pin for LCD Enable                                                 |
| D    | 6   | D12                 | T1 <br /> /OC.4D <br /> ADC9                  | Pin for Input/Ouput 2 (PWM for acidic food)                        |
| D    | 5   |                     | XCK1 <br /> /CTS                              | Ext. temp. 2                                                       |
| D    | 4   | D4                  | ICP1 <br /> ADC8                              | Pin for LCD RS                                                     |
| D    | 3   | D3                  | /INT3 <br /> TXD1                             | Rotary pin B                                                       |
| D    | 2   | D0                  | /INT2 <br /> RXD1                             | Rotary pin A                                                       |
| D    | 1   | D2 <br /> SDA       | /INT1 <br /> SDA                              |                                                                    |
| D    | 0   | D3 (PWM) <br /> SCL | /INT0 <br /> SCL <br /> OC0B                  |                                                                    |
| E    | 6   | D7                  | INT6 <br /> /AIN0                             | Rotary push button                                                 |
| E    | 2   | /HWB                | /HWB                                          | Enable Chip (/EC) pin for external flash memory <br /> /HWB <br /> |
| F    | 7   | A0                  | ADC7 <br /> TDI                               | Data for HX711 (pH adquisiton)                                     |
| F    | 6   | A1                  | ADC6 <br /> TDO                               | Clock for HX711 (pH adquisition)                                   |
| F    | 5   | A2                  | ADC5 <br /> TMS                               | Pin for Input/Ouput 3                                              |
| F    | 4   | A3                  | ADC4 <br /> TCK                               | Pin for Input/Ouput 4                                              |
| F    | 1   | A4                  | ADC0                                          | Battery level                                                      |
| F    | 0   | A5                  | ADC0                                          | Pin for conductometer adquisition                                  |
