# Pin mapping

Pin mapping between microcontroller, Bioreactor, and Arduino.

| Port | Pin | Arduino Mask        | Alternative functions                         | Bertha V6.1.0                               |
| ---- | --- | ------------------- | --------------------------------------------- | ------------------------------------------- |
| B    | 7   | D11 (PWM)           | OC0A <br /> OC1C <br /> PCINT7 <br /> /RTS    | Fan control                                 |
| B    | 6   | D10 (PWM)           | OC1B <br /> PCINT6 <br /> OC.4B <br /> ADC13  | Pin for Input/Ouput 1 (PWM food in)         |
| B    | 5   | D9 (PWM)            | OC1A <br /> PCINT5 <br /> /OC.4B <br /> ADC12 | Pin for stepper steps                       |
| B    | 4   | D8                  | PCINT4 <br /> ADC11                           | Pin for stepper direction                   |
| B    | 3   | MISO                | PDO <br /> MISO <br /> PCINT3                 |
| B    | 2   | MOSI                | PDI <br /> MOSI <br /> PCINT2                 |
| B    | 1   | SCK                 | SCK <br /> PCINT1                             |
| B    | 0   | /SS                 | /SS <br /> PCINT0                             | Serial communication reception LED          |
| C    | 7   | D13 (PWM)           | ICP3 <br /> CLK0 <br /> OC4A                  | LED for check bioreactor code run correctly |
| C    | 6   | D5 (PWM)            | OC.3A <br /> /OC4A                            | Pin for Input/Ouput 2 (PWM food out)        |
| D    | 7   | D6 (PWM)            | T0 <br /> OC.4D <br /> ADC10                  | Pin for PID control                         |
| D    | 6   | D12                 | T1 <br /> /OC.4D <br /> ADC9                  | Pin for Input/Ouput 4                       |
| D    | 5   |                     | XCK1 <br /> /CTS                              | Serial communication transmission LED       |
| D    | 4   | D4                  | ICP1 <br /> ADC8                              | Pin for Input/Ouput 3                       |
| D    | 3   | D3                  | /INT3 <br /> TXD1                             |                                             |
| D    | 2   | D0                  | /INT2 <br /> RXD1                             |                                             |
| D    | 1   | D2 <br /> SDA       | /INT1 <br /> SDA                              |                                             |
| D    | 0   | D3 (PWM) <br /> SCL | /INT0 <br /> SCL <br /> OC0B                  |                                             |
| E    | 7   | A3 / D21            | ADC4/TCK                                      |
| E    | 6   | D7                  | INT6 <br /> /AIN0                             | Ext. OneWire 1                              |
| E    | 2   | /HWB                | /HWB                                          | /HWB                                        |
| F    | 7   | A0                  | ADC7 <br /> TDI                               | Clock for HX711                             |
| F    | 6   | A1                  | ADC6 <br /> TDO                               | Data for HX711                              |
| F    | 5   | A2                  | ADC5 <br /> TMS                               | PCB temp. OneWire                           |
| F    | 4   | A3                  | ADC4 <br /> TCK                               |                                             |
| F    | 1   | A4                  | ADC0                                          | ON/OFF error LED                            |
| F    | 0   | A5                  | ADC0                                          | Ext. OneWire 2                              |
