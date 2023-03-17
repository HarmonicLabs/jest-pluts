# jest-pluts

`jest-pluts` gives you the necessary Jest matchers to easly test your [`plu-ts`](https://github.com/HarmonicLabs/plu-ts) code using [Jest](https://jestjs.io/)

> **NOTE** `jest-pluts` only supports Jest version 27.2.5 and newer.

## Setup

Create a setup script that imports all the `jest-pluts` matchers:

```js
// jest-pluts_setup.js
import * as pmatchers from '@harmoniclabs/jest-pluts';
expect.extend(pmatchers);
```

and then add the file to the [`setupFilesAfterEnv`](https://jestjs.io/docs/configuration#setupfilesafterenv-array) configuration option;

assuming the previous file is in the root directory and is called `jest-pluts_setup.js`; your option is:

```json
"setupFilesAfterEnv": ["./jest-pluts_setup.js"]
```

## Use with `vitest`

`jest-pluts` works with `vitest` because their `expect.extend` API is compatible. In your setup script:

```javascript
import {expect} from "vitest";
import * as pmatchers from "@harmoniclabs/jest-pluts";
expect.extend(pmatchers);
```

Add this setup script to your `vitest.config.js`:

```javascript
export default defineConfig({
  test: {
    setupFiles: ["./jest-pluts_setup.js"],
  },
});
```