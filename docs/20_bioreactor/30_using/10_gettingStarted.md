---
sidebar_position: 1
---

# Starting a new bioreactor

When you have a new bioreactor you should start by configuring it. You may connect using a terminal through the serial port.

You may as well use the Visual Studio Code (with PlatformIO extension) application to directly connect to the bioreactor through serial (press (Mac) <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>P</kbd> or (PC/Linux) <kbd>Ctrl</kbd>+<kbd>⇧</kbd>+<kbd>P</kbd> and search for `serial`).

The menu is accessible using the `h` instruction.

:::important
If you can't open the serial monitor in VSCode with PlatformIO extension, please make sure that you have opened the project.
:::

:::caution
You should not forget to add a `CR + LF` after each instruction, this is automatically in VScode Serial Monitor but you need to consider it if you don't have an answer in the serial monitor).
:::

## Initializing parameters

Connect via the terminal and reset all the parameters to the default parameters:

`ur1234`

It is also important to set a unique qualifier for the bioreactor. You should fill the [list](40_qualifiers.md) with a free code.

## Setup the weight

There is now a special menu for the weight calibration `w`.

You should do the following step in order to callibrate the weight:

1. Empty bioreactor : `we`
2. Empty bioreactor + 1kg : `wk`
3. Bioreactor filled at high level : `wh`

You may now check the reproducibility and the weight in g of any object using `wt`

It is important to note that an error (stored in [PARAM_ERROR](../10_platformio/20_parameters.md#param_error)) will be generated if
the weight is either 20% under the minimal value or 20% over the maximal value and this should stop all the functions.

## The main parameters

In order to activate the bioreactor you need to enable functions. Currently there are 3 functions:

- Agitation (value 1)
- Food control (value 2)
- Temperature control (value 3)

You may enable the functionnablities by setting the parameter `AZ`. To activate all the functionnalities
enter `AZ63`.
