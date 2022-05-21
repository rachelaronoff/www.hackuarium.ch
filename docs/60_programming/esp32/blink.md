# Led pins

Led pin depending the boards

| Model         | pin |
| ------------- | --- |
| WEMOS         |  2  |
| TTGO Lora 2.0 | 22  |
| TTGO LoRa 2.1 | 25  |
| WEMOS C3 mini |  7  |

:::caution
Take care with TTGO LoRa V2.0, pin 22 is the same SCL_OLED pin, so, if you want to see blinking LED and OLED display at same time, you can't use pin 22 for blinking.
:::

:::info
For more info about TTGO LoRa V2.0: 

[BIG ESP32 + SX127x topic part 2](https://www.thethingsnetwork.org/forum/t/big-esp32-sx127x-topic-part-2/11973)
:::
