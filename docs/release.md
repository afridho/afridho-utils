# Release (Developer)

## How to set up `standard-version`

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
