# afridho-utils

A lightweight utility library for JavaScript/TypeScript with handy functions like random number generation and currency formatting for Indonesian Rupiah (IDR).

## Features

-   Generate random integers within a range
-   Format numbers as Indonesian Rupiah currency strings
-   Modular design with support for both CommonJS and ES Modules

## Installation

```bash
npm install afridho-utils
```

## Usage

### Import entire package

```js
import { getRandomNumber, toIdr } from "afridho-utils";

console.log(getRandomNumber(1, 100)); // e.g. 42
console.log(toIdr(1500000)); // Rp 1.500.000
```

### Import specific modules (subpath imports)

```js
import { toIdr } from "afridho-utils/currency";
const getRandomNumber = require("afridho-utils/number");

console.log(toIdr(50000)); // Rp 50.000
console.log(getRandomNumber(5, 10)); // e.g. 7
```

## API

`⁠getRandomNumber(min: number, max: number): number`
Generates a random integer between ⁠min and ⁠max (inclusive).

`⁠toIdr(amount: number): string`
Formats a number as Indonesian Rupiah currency string. Returns `⁠'Invalid Amount.'` if input is invalid.

## Release (Developer)

### How to set up `standard-version`

1. Install as dev dependency:
   `npm install --save-dev standard-version`
2. Add release script to ⁠package.json:

```json
"scripts": {
  "release": "standard-version"
}
```

3. Use Conventional Commits style in your commit messages, e.g.:

```
feat: add roundToDecimals function
fix: correct typo in toIdr function
```

4. Run release:
   `npm run release`
