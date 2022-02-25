# Threadino

Threadino consists of a common code base for all our projects: the idea is that once you have made and assembled a custom PCB using a micro-controller from the AtMega serie, you can really easily and quickly program it for your custom application.

The code base has a `lib` folder with all the code common to all the projects- For instance, you already have facilitated I2C programming and access to various utilities, like our serial parameters system ADD LINK! Moreover, we set up an enironment that allows you to have many threads running at the same time on the micro-controller, which allows you to write pretty complex code on a really elementary micro-controller.
