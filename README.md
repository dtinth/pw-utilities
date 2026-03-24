# pw-utilities

Playwright utilities for stabilizing elements before taking screenshots.

## Installation

```bash
npm install pw-utilities
```

## API

### `stabilize(locator)`

Scrolls the element into view and waits for its position to stop changing across animation frames before taking a screenshot. Injects a temporary red outline overlay so the element is visible in the screenshot even before the stabilization loop completes.

```ts
import { stabilize } from "pw-utilities";

const locator = page.locator("#my-element");
await stabilize(locator);
await locator.screenshot();
```

### `LocatorLike`

A duck-typed interface compatible with Playwright's `Locator`. This library does not depend on `@playwright/test` at runtime — it uses structural typing for compatibility.
