# eslint-config-zyhou

[![](https://github.com/zyhou/eslint-config-zyhou/workflows/npmpublish/badge.svg?branch=master)](https://github.com/zyhou/cra-template-react-admin/actions)
[![npm version](https://badge.fury.io/js/eslint-config-zyhou.svg)](https://www.npmjs.com/package/eslint-config-zyhou)


> A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.

As developers, we spend more time reading code than writing it. These rules aim to make reading JavaScript a priority.

That means some rules will feel oppressive or "over the top" for many developers, which is fine. If you don't like it, you can extend the rules and override them with the ones that bother you. Either way. 😊

This config also comes with the following plugins, and corresponding rules, baked in.

-   [babel-eslint](https://www.npmjs.com/package/babel-eslint)
-   [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
-   [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel)
-   [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress)
-   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
-   [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
-   [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
-   [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
-   [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
-   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
-   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
-   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## Install

```
$ yarn add eslint prettier eslint-config-zyhou -D
```

## Usage

Create an ESLint config in your `.eslintrc.json` file

```json
{
    "extends": ["zyhou"],
    "rules": {
        // enable additional rules, override rule options, or disable rules
    }
}
```

Create an [Prettier config](https://prettier.io/docs/en/options.html) in your `.prettierrc` file.

```json
{
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "printWidth": 120
}
```

## Other configs

This config also exposes a few other configs. You can combine with the base config.

```json
{
    "extends": ["zyhou", "zyhou/<config-name>"]
}
```

-   `cypress`: [cypress](https://www.cypress.io/) testing framework
-   `jsdoc`: for beautiful comment and generate doc
-   `jest`: [jest](https://jestjs.io/) testing framework
-   `jsx-a11y`: for rules regarding accessibility with JSX
-   `react`: [React](https://reactjs.org/) JS library

## Other recommendation

### Lint and Format all you codebase

Create these commands in your `package.json`

```json
{
    "scripts": {
        "lint": "eslint .",
        "format": "prettier --write --check \"**/*.+(js|md|json)\""
    }
}
```

-   `yarn format`: run prettier on code base, you can change path and file extension
-   `yarn lint --fix`: run eslint and automatically fix problems
-   `yarn lint`: run eslint on code base, fix or update rules

### Use pre-commit Hook

Add [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) in dev dependencies

```
$ yarn add husky lint-staged -D
```

Update your `package.json` file.

```json
{
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.js": ["eslint", "git add"],
        "*.{js,json,md}": ["prettier --write", "git add"]
    }
}
```

You can add this config in multiples files.

```json
// .huskyrc
{
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
```

```json
// .lintstagedrc
{
    "*.js": ["eslint", "git add"],
    "*.{js,json,md}": ["prettier --write", "git add"]
}
```

## Contribution

Pull request are welcome. Fix existing rules, add other eslint plugin packages, etc...
