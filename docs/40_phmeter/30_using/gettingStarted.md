# Starting a new pHMeter

When you have a new pHMeter you should start by configuring it. You may connect using a terminal through the serial port.

You may as well use the [PlatformIO](https://platformio.org/install/ide?install=vscode) in [Visual Studio Code](https://code.visualstudio.com/download) application (or even [Arduino](https://www.arduino.cc/en/software) application) to directly connect to the pHMeter through serial. The menu is accessible using the `h` instruction.

:::note
If you are using Arduino, you should not forget to add a `CR + LF` after each instruction.
:::

## Initializing parameters

Connect via the terminal and reset all the parameters to the default parameters

`ur1234`

It is also important to set a unique qualifier for the bioreactor. You should fill the [list](qualifiers.md) with a free
code.

## Setup the pH

:::danger

¡UPDATE 17082022!

:::

There is now a special menu for the pH calibration `c`.

You should do the following step in order to callibrate the pH:

1. Neutral pH: `cn`
2. Acid solution (4.0): `ca`
3. Base solution (7.0): `cb`
4. Base solution (10.0) : `ck`

You may now check the reproducibility and the pH in Hidrogen concentration of any object using `ct`.

It is important to note that an error (stored in [PARAM_ERROR](../10_platformio/20_parameters.md#PARAM_ERROR) will be generated if the pH is either under the minimal value or over the maximal value and this should stop all the functions for pH control.

## Setup the EC

:::danger

¡UPDATE 17082022!

:::

There is now a special menu for the EC calibration `c`.

You should do the following step in order to callibrate the EC:

1. Destiled water: `cd`
2. 10% Potassium Chloride (KCI): `cp`

You may now check the reproducibility and the EC in &mu;Siemens/cm of any object using `ce`

It is important to note that an error (stored in [PARAM_ERROR](../10_platformio/20_parameters.md#PARAM_ERROR) will be generated if the EC is either under the minimal value or over the maximal value.

## The main parameters

In order to activate the pHMeter you need to enable functions. Currently there are 3 functions:

- pH control (value 1).
- EC control (value 2).

You may enable the functionnablities by setting the parameter `AZ`. To activate all the functionnalities enter `AZ63`.
