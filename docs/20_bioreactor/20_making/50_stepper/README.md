# Stepper

## DRV8811

The PWM chopping current is set by a comparator, which compares the voltage across a current-sense resistor,
multiplied by a factor of 8, with a reference voltage. The reference voltage is input from the VREF pin. The fullscale (100%) chopping current is calculated as follows:

![formula.png](formula.png)

If a 0.22 Ω sense resistor is used and the VREF pin is 3.3 V, the full-scale (100%) chopping current is
3.3 V / (8 × 0.22 Ω) = 1.875 A.

We need to define Rlim. That will decide the reference voltage.

Ichop = 0.4 A
Rsense = 0.2 Ω
Vref should be around 0.64 V

U = R \* I

U1 / R1 = U2 / R2
U1 + U2 = 3.3 V

R1 = 3k3 Ω

R2 = R1 \* U2 / (3.3 - U2)

R2 = 3300 \* 0.64 / (3.3 - 0.64)

R2 = 640Ω

Stepper [17hs13-0404s1](https://www.omc-stepperonline.com/download/17HS13-0404S1.pdf): 0.4 A, 12 V

For 0.2 A to keep it really cold:

R2 = 150 Ω (see ticket [#27](https://github.com/Hackuarium/bioreactor/issues/27) (finally set is Rsense = 0.1 Ω and Rlim = 180 Ω)
