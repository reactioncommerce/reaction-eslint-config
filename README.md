# @reactioncommerce/eslint-config

[![CircleCI](https://circleci.com/gh/reactioncommerce/reaction-eslint-config/tree/master.svg?style=svg)](https://circleci.com/gh/reactioncommerce/reaction-eslint-config/tree/master)

[![NPM](https://nodei.co/npm/@reactioncommerce/eslint-config.png)](https://npmjs.org/package/@reactioncommerce/eslint-config)

The ESLint config used by Reaction Commerce JavaScript apps and packages, following our code style guide.

## How To Install and Configure

How to install and configure this in a project varies slightly depending on what type of project it is. In all cases, it's necessary to install the `eslint` package and all required ESLint plugin packages in your project along with this config package.

### Node Projects

Follow these instructions for Node projects, whether they use CommonJS or ECMAScript modules.

```sh
npm install --save-dev eslint @reactioncommerce/eslint-config eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise eslint-plugin-you-dont-need-lodash-underscore
```

Then set your ESLint config either in package.json:

```json
"eslintConfig": {
  "extends": "@reactioncommerce/eslint-config/node"
}
```

Or in a root file named `.eslintrc` if your project does not have a package.json:

```json
{
  "extends": "@reactioncommerce/eslint-config/node"
}
```

Or in a root file named `.eslintrc.cjs`:

```js
module.exports = {
  extends: "@reactioncommerce/eslint-config/node"
};
```

### React Projects

Follow these instructions for Webpack React projects, whether they use CommonJS or ECMAScript modules.

```sh
npm install --save-dev eslint @reactioncommerce/eslint-config eslint-plugin-import eslint-plugin-jest eslint-plugin-promise eslint-plugin-you-dont-need-lodash-underscore eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Then set your ESLint config either in package.json:

```json
"eslintConfig": {
  "extends": "@reactioncommerce/eslint-config/browser-react"
}
```

Or in a root file named `.eslintrc` if your project does not have a package.json:

```json
{
  "extends": "@reactioncommerce/eslint-config/browser-react"
}
```

Or in a root file named `.eslintrc.cjs`:

```js
module.exports = {
  extends: "@reactioncommerce/eslint-config/browser-react"
};
```

### Projects with Node and React

For a project that has mixture of Node server code and React browser code, run both of the `npm install` commands in the above sections, and list both configs in an `extends` array.

```json
{
  "extends": [
    "@reactioncommerce/eslint-config/browser-react",
    "@reactioncommerce/eslint-config/node"
  ]
}
```

### Other Config

For backward compatibility, doing `extends: "@reactioncommerce"` (without `/browser-react` or `/node`) continues to provide a combined config that uses the Babel parser. Using this is not recommended, but if you do, be sure to also `npm install --save-dev babel-eslint`.

## How to Use

Add a "lint" script in `package.json`:

```json
"scripts": {
  "lint": "eslint ."
},
```

Then enter `npm run lint` command whenever you want to check all the code. Fix any issues that are reported before committing.

You should also install an ESLint extension for your code editor. It will automatically detect your ESLint configuration and highlight issues in your editor as you type.

## Releases

This NPM package is published automatically on every push to the `master` branch. Be sure to use proper Git commit messages so that the version will be bumped properly and release notes can be automatically generated.

- Refer to https://github.com/semantic-release/semantic-release#commit-message-format
- To avoid triggering a release, such as for a README-only change, include `[skip release]` in your commit message.
