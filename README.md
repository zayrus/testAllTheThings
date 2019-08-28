# tape

## What?
Tape is a JavaScript testing framework that works in both Node.js and Browsers. 
It lets you write simple tests that are easy to read and maintain. The output of Tape tests is a "TAP Stream" which can be read by other programs/packages e.g. to display statistics of your tests.

## Why?
Testing your code is essential to ensuring reliability.

There are many testing frameworks so it can be difficult to choose. Most testing frameworks/systems try to do too much, have too many features ("bells and whistles" ...) or inject global variables into your run-time or have complicated syntax.

### Why Tape (not XYZ Test Runner/Framework...)?
- No configuration required (works out of the box, but can be configured if needed).
- No "Magic" / Global Variables injected into your run-time (e.g: describe, it, before, after, etc.).
- No Shared State between tests (tape does not encourage you to write messy / "leaky" tests!).
- Bare-minimum only require or import into your test file.
- Tests are Just JavaScript so you can run tests as a node script e.g: node test/my-test.js.
- No globally installed "CLI" required to run your tests.
- Appearance of test output (what you see in your terminal/browser) is fully customisable.

