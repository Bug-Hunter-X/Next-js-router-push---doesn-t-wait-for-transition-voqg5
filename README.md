# Next.js router.push() race condition

This example demonstrates a common issue when using the `router.push()` method in Next.js.  The problem occurs when code following the `router.push()` call depends on the route transition being fully completed before execution. Because `router.push()` is asynchronous, the subsequent code might execute before the route change is finished, leading to unexpected results or errors.

## The Problem

The `handleClick` function in `bug.js` attempts to log 'Route change complete' after navigating to another page.  However, due to the asynchronous nature of `router.push()`, this log statement often executes *before* the route transition is finished, leading to inconsistent behavior.

## The Solution

`bugSolution.js` demonstrates a solution using the `router.events` to listen for route changes and ensuring the subsequent logic executes only after the transition is complete. This approach ensures that the 'Route change complete' log message appears only after the navigation to '/another-page' is fully finished.  This makes the code more robust and prevents unexpected behavior.