# @reactioncommerce/eslint-config

[![CircleCI](https://circleci.com/gh/reactioncommerce/reaction-eslint-config/tree/master.svg?style=svg)](https://circleci.com/gh/reactioncommerce/reaction-eslint-config/tree/master)

[![NPM](https://nodei.co/npm/@reactioncommerce/eslint-config.png)](https://npmjs.org/package/@reactioncommerce/eslint-config)

The ESLint config used by Reaction Commerce JavaScript apps and packages, following our [code style guide](https://docs.reactioncommerce.com/docs/styleguide).

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

## Releases

This NPM package is published automatically on every push to the `master` branch. Be sure to use proper Git commit messages so that the version will be bumped properly and release notes can be automatically generated.

- Refer to https://github.com/semantic-release/semantic-release#commit-message-format
- To avoid triggering a release, such as for a README-only change, include `[skip release]` in your commit message.
