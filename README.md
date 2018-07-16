# create-carbon-app

Quickly create a ready-for-dev application that uses [React](https://reactjs.org/) & [Carbon](https://carbon.sage.com/) - inspired by [create-react-app](https://github.com/facebook/create-react-app).

## Get Started

```
npx create-carbon-app my-app
cd my-app
npm start
```

> `npx` comes with npm v5.2+

## Further Usage

### Commands

There are a number of commands set up to use out of the box:

* `npm start` - This will boot the app using Webpack for development.
* `npm test` - This will boot Jest for running tests in watch mode.
* `npm run debug` - This will boot Jest for running tests with debugging enabled* (we also recommend you install [NiM](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?hl=en) which will automatically open Chrome for you).
* `npm run build` - This will compile assets ready for production (this defaults to the `./assets` directory)**.
* `npm run ci` - This will run a combination of lint and Jest, perfect for continuous integration.
* `npm run jest` - This will run Jest without any of the default options (without watch mode or debugging enabled).
* `npm run lint -- ./src` - This runs linting over your code.

*If you're using **Windows** you will need to alter this command slightly - see [Jest#3750](https://github.com/facebook/jest/issues/3750).

**If you're using **Windows** you will need to alter how the environment variable is set.

### Config

#### Webpack

Webpack is preconfigured using configuration from [Carbon Factory](https://github.com/sage/carbon-factory). You can override options in the `webpack.config.js` file, or create your own!

See [Webpack](https://webpack.js.org/) for more information.

#### Jest

Jest is preconfigured using configuration from [Carbon Factory](https://github.com/sage/carbon-factory). You can override options in the `jest.config.js` file, or create your own!

See [Jest](https://jestjs.io/) for more information.

## Licence

create-carbon-app is licensed under the [Apache-2.0 licence](https://github.com/Sage/create-carbon-app/blob/master/LICENSE).

Copyright (c) 2018 Sage Group Plc. All rights reserved.
