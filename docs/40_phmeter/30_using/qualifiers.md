# List of qualifiers

Each device has an identifier that allows to recognize it's kind and should be unique.

:::note
You can see all the identifiers here: [Identifiers - Hackuarium](../../60_programming/communication/README.md#list-of-parameters-and-their-meaning).
:::

A qualifier is composed of 2 bytes and therefore a number from 0 to 65535.

It can be set using the `uq` command.

You can also display this number as 2 bytes and therefore as 2 ASCII code.

In the case of the pHMeter the first ASCII code is `P`.

You may for example give the following code to the pHMeter

* PA = 0x5041 = 20545
* PB = 0x5042 = 20546
* PC = 0x5043 = 20547
* PD = 0x5044 = 20548
* PE = 0x5045 = 20549
* ...

:::caution
Each code will correspond to a database name so that is really needs to be unique!
:::

You may convert from the 2 letters code to a number using the following javascript code.

```js
'P'.charCodeAt(0)*256+'A'.charCodeAt(0)
```

:::tip
You may use it in the browser console.
:::

In the logs this ID will appear as hexadecimal code. You may convert from deciaml to hexadecimal in javascript using the following code:

```js
Number(20545).toString(16)
```
