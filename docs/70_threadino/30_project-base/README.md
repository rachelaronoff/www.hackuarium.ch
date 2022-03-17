# Threadino: a project base to reuse

We created a repository with all the basic code that allows you to program an atmega328p through platformio for a custom project. The code has the base for various threads, I2C, etc. The idea is that you fork the base project to your organisation, and then add your project specific code in the fork.

### Project structure

- `boards`: contains the JSON like files that allow you to program custom boards (you specify the cpu frequency, the kind of micro-controller and whether it uses internal or external clock)
- `lib`: the code that we wrote that is common to all the projects. If you add things there, you should make a pull request with the changes to the base project.
- `src`: this contains the code specific to your project
- `platformio.ini`: this is the file that configures the whole Platformio project. It is there that you specify the versions of the libraries (on GitHub) that you use in your project.
