# @reactioncommerce/eslint-config

The ESLint config used by Reaction Commerce JavaScript apps and packages, following our code style guide.

## How To Use

Note: _Be sure you are using NPM 5+_

First install in your project directory:

```bash
npx install-peerdeps --dev @reactioncommerce/eslint-config
```

Then set your eslint config either in package.json:

```json
"eslintConfig": {
  "extends": "@reactioncommerce"
}
```

Or in a root file named `.eslintrc` if your project does not have a package.json:

```json
{
  "extends": "@reactioncommerce"
}
```
