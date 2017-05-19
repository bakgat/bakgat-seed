![Bakgat Seed](https://image.ibb.co/cAp4JF/bakgat_seed.png)

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Build Status](https://travis-ci.org/NathanWalker/angular-seed-advanced.svg?branch=master)](https://travis-ci.org/Nate.hanWalker/angular-seed-advanced)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/NathanWalker/angular-seed-advanced.svg)](https://david-dm.org/NathanWalker/angular-seed-advanced)
[![devDependency Status](https://david-dm.org/NathanWalker/angular-seed-advanced/dev-status.svg)](https://david-dm.org/NathanWalker/angular-seed-advanced#info=devDependencies)

This is an **advanced** seed project for Angular apps based on [Minko Gechev's](https://github.com/mgechev) [angular-seed](https://github.com/mgechev/angular-seed) and [Nathan Walker's](https://github.com/NathanWalker) [angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced) that expands on all of its great features to include core support for:

#### Integration with:
- [angular/material2](https://github.com/angular/material2) Material Design components built on top of Angular
- [ngrx/store](https://github.com/ngrx/store) RxJS powered state management, inspired by **Redux**
- [ngrx/effects](https://github.com/ngrx/effects) Side effect model for @ngrx/store
- [ngx-translate](https://github.com/ngx-translate/core) for i18n 
  - Usage is optional but on by default
  - Up to you and your team how you want to utilize it. It can be easily removed if not needed. 
- [angulartics2](https://github.com/angulartics/angulartics2) Vendor-agnostic analytics for Angular applications.
  - Out of box support for [Segment](https://segment.com/)
    - When using the seed, be sure to change your `write_key` [here](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/index.html#L24)
  - Can be changed to any vendor, [learn more here](https://github.com/angulartics/angulartics2#supported-providers)
- [lodash](https://lodash.com/) Helps reduce blocks of code down to single lines and enhances readability
- [NativeScript](https://www.nativescript.org/) cross platform mobile (w/ native UI) apps. [Setup instructions here](#nativescript-app).
- [Electron](http://electron.atom.io/) cross platform desktop apps (Mac, Windows and Linux). [Setup instructions here](#electron-app).

| ![Multiple Platforms](https://cdn.filestackcontent.com/zZlQKKKjQUaBr9pLkEVK) |
| :---: |
| *The zen of multiple platforms.* Chrome, Android and iPhone all running the same code. |

| ![Desktop](https://d2wp4shknjcfjl.cloudfront.net/api/file/1O4FRGsSHS8g0Lz3EKNy) |
| :---: |
| *Programming Nirvana.* Mac and Windows desktop both running the same code. |

# Table of Contents

- [Prerequisites](#prerequisites)
- [How to start](#how-to-start)
- [How to start with AoT](#how-to-start-with-aot)
- [Mobile app](#mobile-app)
- [Desktop app](#desktop-app)
- [Running tests](#running-tests)
- [Web configuration options](#web-configuration-options)
- [Code organization overview](#code-organization-overview)
- [How-tos](#how-tos)
- [General best practice guide to sharing code](#general-best-practice-guide-to-sharing-code)
- [Integration guides](https://github.com/NathanWalker/angular-seed-advanced/wiki)
- [How best to use for your project](#how-best-to-use-for-your-project)
- [Dockerization](#dockerization)
  + [How to build and start the dockerized version of the application](#how-to-build-and-start-the-dockerized-version-of-the-application)
  + [Development build and deployment](#development-build-and-deployment)
  + [Production build and deployment](#production-build-and-deployment)
- [Contributing](#contributing)
- [License](#license)
  
**Advice**: If your project is intended to target a single platform (i.e, web only), then [angular-seed](https://github.com/mgechev/angular-seed) is likely more than suitable for your needs. However if your project goals are to target multiple platforms (web, native mobile and native desktop), with powerful out of the box library support and highly configurable/flexible testing options, then you might want to keep reading.

**Too Much?!**: Don't worry it's ok, I completely understand. There is a simplified version of this seed which still allows web + mobile + desktop **without** the extra libraries and features like ngrx or analytics. Give this a shot: https://github.com/jlooper/angular-starter

It's built with a lot of the same structure found here so things work the same but is definitely easier to start with if just getting into multi-platform development.

### Prerequisites

**Note** you should have **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

* To run the NativeScript app (currently supports 3.x):

```
npm install -g nativescript
```

## How to start

```bash
# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start
# api document for the app
# npm run build.docs

# generate api documentation
$ npm run compodoc
$ npm run serve.compodoc

# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build
$ npm run build.prod
```

## How to start with AoT

**Note** that AoT compilation requires **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

In order to start the seed with AoT use:

```bash
# prod build with AoT compilation, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.aot
```

## Mobile app

The mobile app is provided via [NativeScript](https://www.nativescript.org/), an open source framework for building truly native mobile apps.

#### Setup

```
npm install -g nativescript 
```

#### Dev Workflow

You can make changes to files in `src/client/app` or `nativescript/src/app` folders. A symbolic link exists between the web `src/client/app` and the `nativescript/src/app` folder so changes in either location are mirrored because they are the same directory inside.

Create `.tns.html` and `.tns.scss` NativeScript view files for every web component view file you have. You will see an example of the `app.component.html` as a [NativeScript view file here](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/components/app.component.tns.html).

The root module for the mobile app is `nativescript/src/native.module.ts`: `NativeModule`. 

#### Run

```
iOS:                      npm run start.ios   
iOS (device):             npm run start.ios.device

// or...

Android:                      npm run start.android
Android (device):             npm run start.android.device
```

* Requires an image setup via AVD Manager. [Learn more here](http://developer.android.com/intl/zh-tw/tools/devices/managing-avds.html) and [here](https://github.com/NativeScript/nativescript-cli#the-commands).

OR...

* [GenyMotion Android Emulator](https://www.genymotion.com/)

##### Building with Webpack for release builds

Create AoT builds for deployment to App Store and Google Play.

```
Android:   npm run build.android
iOS:       npm run build.ios
```

## Desktop app

The desktop app is provided via [Electron](http://electron.atom.io/), cross platform desktop apps
with JavaScript, HTML, and CSS.

#### Develop

```
Mac:      npm run start.desktop
Windows:  npm run start.desktop.windows
```

#### Develop with livesync
```
Mac:      npm run start.livesync.desktop
Windows:  npm run start.livesync.desktop.windows
```

#### Release: Package Electron App for Mac, Windows or Linux

```
Mac:      npm run build.desktop.mac
Windows:  npm run build.desktop.windows
Linux:    npm run build.desktop.linux
```

## Running tests

```bash
$ npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
$ npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
$ ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
$ npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
$ npm run webdriver-start
$ npm run serve.e2e
$ npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
$ npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Web configuration options

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
$ npm start -- --env-config ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

## Code organization overview

- `nativescript`: Root of this directory is reserved for mobile app.
  - `src`: mobile app src.
    - `app`: Symbolic link of shared code from web app.
    - `App_Resources`: iOS and Android platform specific config files and images.
    - `mobile`: Mobile specific services, etc. Build out mobile specific services here as well as overrides for web services that need to be provided for in the mobile app. **Safe to import {N} modules here.**
    - [native.module.ts](https://github.com/NathanWalker/angular-seed-advanced/blob/master/nativescript/src/native.module.ts): Root module for the mobile app provided by NativeScript. Override/provide native mobile implementations of services here.
- `src/client`: Root of this directory is reserved for web and desktop.
  - `app`: All the code in this directory is shared with the mobile app via a symbolic link.
    - `components`: Reserved for primary routing components. Since each app usually has it's own set of unique routes, you can provide the app's primary routing components here.
    - `shared`: Shared code across all platforms. Reusable sub components, services, utilities, etc.
      - `analytics`: Provides services for analytics. Out of the box, [Segment](https://segment.com/) is configured.
      - `core`: Low level services. Foundational layer.
      - `electron`: Services specific to electron integration. Could be refactored out in the future since this is not needed to be shared with the mobile app.
      - `i18n`: Various localization features.
      - `ngrx`: Central ngrx coordination. Brings together state from any other feature modules etc. to setup the initial app state.
      - `sample`: Just a sample module pre-configured with a scalable ngrx setup.
      - `test`: Testing utilities. This could be refactored into a different location in the future.
  - `assets`: Various locale files, images and other assets the app needs to load.
  - `css`: List of the main style files to be created via the SASS compilation (enabled by default).
  - `scss`: Partial SASS files - reserved for things like `_variables.scss` and other imported partials for styling.
  - [index.html](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/index.html): The index file for the web and desktop app (which share the same setup).
  - [main.desktop.ts](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/main.desktop.ts): The  file used by Electron to start the desktop app.
  - [main.web.prod.ts](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/main.web.prod.ts): Bootstraps the AoT web build. *Generally won't modify anything here*
  - [main.web.ts](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/main.web.ts): Bootstraps the development web build. *Generally won't modify anything here*
  - [package.json](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/package.json): Used by Electron to start the desktop app.
  - [system-config.ts](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/system-config.ts): This loads the SystemJS configuration defined [here](https://github.com/NathanWalker/angular-seed-advanced/blob/master/tools/config/seed.config.ts#L397) and extended in your own app's customized [project.config.ts](https://github.com/NathanWalker/angular-seed-advanced/blob/master/tools/config/project.config.ts).
  - [tsconfig.json](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/tsconfig.json): Used by [compodoc](https://compodoc.github.io/compodoc/) - The missing documentation tool for your Angular application - to generate api docs for your code.
  - [web.module.ts](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/web.module.ts): The root module for the web and desktop app.
- `src/e2e`: Integration/end-to-end tests for the web app.

## How-tos

### i18n

* how to add a language?
  - `src/client/assets/i18n/`
    - add `[language code].json` (copy existing one and adapt the translation strings)
  - `https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/web.module.ts#L98-L101`
    - Configure `Languages` InjectionToken with array of supported languages
  - `src/client/app/modules/i18n/components/lang-switcher.component.spec.ts`
    - fix test

### Logging

* what is the basic API surface around logging?
  - ``LogService`` is the main class that consumer code should use to write diagnostic information to one or more configured targets
  - ``LogTarget`` is an abstraction of where the log output is written. (e.g. ``ConsoleTarget`` writes diagnostics to the ``console``)
  - ``LogTargetBase`` is a base abstract class that makes it easier to implement custom log target. It provides a way for inheritors to filter messages by importance.
  - ``LogLevel`` is level of importance associated with every log message (e.g. ``Debug``, ``Info``, ``Warning``, ``Error``)

* how to control amount of information logged?
  - If a log target is derrived from ``LogTargetBase`` the target can be configured to filter messages by importance. You can pass ``minLogLevel`` as ``LogTargetOptions``
  - ``LogService`` additionally uses ``Config.Debug`` switches as a global treshhold to further filter verbosity of the log messages.
   
* how to implement custom log target?
  - Derrive from ``LogTargetBase`` class and implement ``writeToLog`` method (see ``ConsoleTarget``). You can configure several log targets at a time inside main application module. For example:
  ```javascript
  CoreModule.forRoot([
      { provide: WindowService, useFactory: (win) },
      { provide: ConsoleService, useFactory: (cons) },
      { provide: LogTarget, useFactory: (consoleLogTarget), deps: [ConsoleService], multi: true },
      { provide: LogTarget, useFactory: () => new LogStashTarget({minLogLevel: LogLevel.Debug}) }
    ]),
  ```


## General best practice guide to sharing code

There’s actually only a few things to keep in mind when sharing code between web/mobile. The seed does take care of quite a few of those things but here’s a brief list:

* Don’t import {N} modules into your components/services. {N} modules can only be used inside the {N} app therefore cannot be shared. To get around this, use `InjectionToken`'s. [Learn more here](http://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html). A great example of how to integrate 2 different plugins (1 for web, 1 for {N}) and share all the code exists in [this wiki article: How to integrate Firebase across all platforms](https://github.com/NathanWalker/angular-seed-advanced/wiki/How-to-integrate-Firebase-across-all-platforms-(web-nativescript-desktop)) written by the awesome [Scott Lowe](https://twitter.com/scott_d_lowe).
* Use the conditional hooks provided by the seed in shared methods where you may need to handle something differently in {N} than you do on the web. For example, see [here](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/app/modules/i18n/components/lang-switcher.component.ts#L35-L41).
* Don’t use window global. Inject the `WindowService` provided by the seed instead. This includes usage of `alert`, `confirm`, etc. For example:

If you were thinking about doing: `alert('Something happened!');`, *Don't*.
Instead inject `WindowService`:
```
constructor(private win: WindowService) {}

public userAction() {
  if (success) {
    // do stuff
  } else {
    this.win.alert('Something happened!');
  }
}
```

This ensures that when the same code is run in the {N} app, the native `dialogs` module will be used.

* Lastly, understand this video: http://www.nativescriptsnacks.com/videos/2016/06/13/zoned-callbacks.html … As far as dealing with {N} and 3rd party plugins, you want to understand that.

The advice I like to give is:

> Code with web mentality first. Then provide the native capability using Angular’s `{provide: SomeWebService, useClass: SomeNativeService }` during bootstrap.

There are some cases where you may want to use `useValue` vs. `useClass`, and other times may need to use `useFactory`. Read [the Angular docs here to learn more about which you may need for your use case](https://angular.io/docs/ts/latest/cookbook/dependency-injection.html#!#provide).

## How best to use for your project

#### Setup

*NOTE*: This should be done first before you start making any changes and building out your project.

1. `git clone https://github.com/NathanWalker/angular-seed-advanced.git [your-project-name]`
2. `cd [your-project-name]`
3. `git remote set-url origin [your-project-git-repo]` - This will setup `origin` properly.
4. `git remote add upstream https://github.com/NathanWalker/angular-seed-advanced.git` - This will setup `upstream` properly to merge in upstream changes later.
5. `git push` - Go ahead and push up the initial project.
6. Now you have `git` setup and ready to develop your app as well as merge in upstream changes in the future.
7. `npm install` (and all other usage docs in this `README` apply) - continue following instructions [here](https://github.com/NathanWalker/angular-seed-advanced#how-to-start).
8. Create a new folder (or several sub-folders) for your app in `src/client/app/shared` to build your codebase out. Say your app is called `AwesomeApp`, then create `awesomeapp` and start building out all your components and services in there. Create other frameworks as you see fit to organize.

#### Merging latest upstream changes

1. `git fetch upstream` - This will fetch latest `upstream`.
2. `git merge upstream/master` - This will merge in upstream changes.
3. Handle any conflicts to get latest upstream into your app.
4. Continue building your app.

You can read more about [syncing a fork here](https://help.github.com/articles/syncing-a-fork/).

If you have any suggestions to this workflow, please post [here](https://github.com/NathanWalker/angular-seed-advanced/issues).

# Dockerization

The application provides full Docker support. You can use it for both development as well as production builds and deployments.

## How to build and start the dockerized version of the application 

The Dockerization infrastructure is described in the `docker-compose.yml` (respectively `docker-compose.production.yml`.
The application consists of two containers:
- `angular-seed` - In development mode, this container serves the angular app. In production mode it builds the angular app, with the build artifacts being served by the Nginx container
- `angular-seed-nginx` - This container is used only production mode. It serves the built angular app with Nginx.

## Development build and deployment

Run the following:

```bash
$ docker-compose build
$ docker-compose up -d
```

Now open your browser at http://localhost:5555

## Production build and deployment

Run the following:

```bash
$ docker-compose -f docker-compose.production.yml build
$ docker-compose -f docker-compose.production.yml up angular-seed   # Wait until this container has finished building, as the nginx container is dependent on the production build artifacts
$ docker-compose -f docker-compose.production.yml up -d angular-seed-nginx  # Start the nginx container in detached mode
```

Now open your browser at http://localhost:5555

## License

MIT