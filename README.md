# eslint-config-zyhou

[![](https://github.com/zyhou/eslint-config-zyhou/workflows/npmpublish/badge.svg?branch=master)](https://github.com/zyhou/cra-template-react-admin/actions)
[![npm version](https://badge.fury.io/js/eslint-config-zyhou.svg)](https://www.npmjs.com/package/eslint-config-zyhou)

> A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.

As developers, we spend more time reading code than writing it. These rules aim to make reading JavaScript a priority.

That means some rules will feel oppressive or "over the top" for many developers, which is fine. If you don't like it, you can extend the rules and override them with the ones that bother you. Either way. 😊

This config also comes with the following plugins, and corresponding rules, baked in.

-   [@babel/eslint-plugin](https://www.npmjs.com/package/@babel/eslint-plugin)
-   [typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
-   [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
-   [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress)
-   [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
-   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
-   [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
-   [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
-   [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
-   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
-   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
-   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
-   [eslint-plugin-testing-library](https://www.npmjs.com/package/eslint-plugin-testing-library)
-   [eslint-plugin-unicorn](https://www.npmjs.com/search?q=eslint-plugin-unicorn)

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

Create an [Prettier config](https://prettier.io/docs/en/options.html) in your `.prettierrc.json` file.

```json
{
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "printWidth": 100
}
```

## Other configs

This config also exposes a few other configs. You can combine with the base config.

```json
{
    "extends": ["zyhou", "zyhou/<config-name>", "zyhou/presets/<config-name>"]
}
```

-   `zyhou/tests`: [jest](https://jestjs.io/) testing framework + [cypress](https://www.cypress.io/) testing framework
-   `zyhou/react`: [React](https://reactjs.org/) JS library and a11y rules
-   `zyhou/typescript`:[Typescript](https://www.typescriptlang.org/) language
-   `zyhou/presets/node`: [prettier](https://prettier.io/) + base config
-   `zyhou/presets/react`: [prettier](https://prettier.io/) + base + react config
-   `zyhou/presets/typescript`: [prettier](https://prettier.io/) + typescript config
-   `zyhou/presets/typescript-react`: [prettier](https://prettier.io/) + typescript + react config

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

-   `yarn format`: run prettier on code base, you can change path and file extension, `ts|tsx|js|jsx`
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
    "lint-staged": {
        "*.js": "eslint",
        "*.{js,json,md}": "prettier --write"
    }
}
```

Change husky hook

```sh
#!/bin/sh
# .husky/commit-msg
. "$(dirname "$0")/_/husky.sh"

yarn commitlint --edit "$1"
```

```sh
#!/bin/sh
# .husky/pre-commit
. "\$(dirname "\$0")/\_/husky.sh"

yarn lint-staged
```

## VSCode

This is our recommended VSCode configuration using the Prettier extension. Adjust it to the needs of your particular project:

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

## Contribution

Pull request are welcome. Fix existing rules, add other eslint plugin packages, etc...
