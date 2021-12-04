
#⚠️ This is not working now, work in progress⚠️
# electron-vue-boilerplate

[![license](https://img.shields.io/github/license/intradeus/electron-vue-boilerplate.svg?style=flat)][mit]

Simple boilerplate for building [Vue](https://github.com/vuejs/vue) app with [Electron](https://github.com/electron/electron) and [Webpack](https://github.com/webpack/webpack).
Forked from [Oliver Findl's electron-vue-boilerplate](https://github.com/oliverfindl/electron-vue-boilerplate)
---

## Whats under the hood?

- Simple [Vue](https://github.com/vuejs/vue) app ([vue-router](https://github.com/vuejs/vue-router) and [vuex](https://github.com/vuejs/vuex) can be additionally installed).
- [Electron](https://github.com/electron/electron) with [electron-builder](https://github.com/electron-userland/electron-builder) package for building installers.
- [Webpack](https://github.com/webpack/webpack) server for [development](https://github.com/webpack/webpack-dev-server) with HMR enabled.
- Support for [Sass](https://github.com/sass/sass) out of box thanks to [node-sass](https://github.com/sass/node-sass) package.

## Install

```bash
# Clone repository from GitHub 
$ git clone https://github.com/intradeus/electron-vue-boilerplate

# Switch to <directory>
$ cd <directory>

# Install all dependencies
$ npm install

# [optional] Check and update all dependencies
$ npm outdated
$ npm update
```

## Usage

``` bash
# [terminal 1] Launch Webpack development server with Vue app loaded
$ npm run dev

# [terminal 2] Launch Electron app connected to Webpack development server
$ npm run app

# [terminal 3] Build installers for your current platform
$ npm run dist
```

## Scripts

```bash
# Runs 'npm run start' and npm run watch:vue-app in parallel, for local development.
$ npm run dev

# Alias for build:electron-app and start:electron-app
$ npm run start

# Launch Electron app connected to Webpack development server
$ npm run start:electron-app

# Build Electron app and Vue app
$ npm run build

# Build Electron app with DevTools disabled
$ npm run build:electron-app

# Build electron app with DevTools enabled
$ npm run build:electron-app-dev

# Copy Electron app assets
$ npm run copy:electron-app-assets

# Build Vue app
$ npm run build:vue-app

# Launch Webpack development server with Vue app loaded
$ npm run watch:vue-app

# Pack Electron app (for development purposes only)
$ npm run pack

# Build installers for your current platform
$ npm run dist

# Build installers for all platforms
$ npm run dist:all

# Build installers for Windows
$ npm run dist:w

# Build installers for macOS
$ npm run dist:m

# Build installers for Linux
$ npm run dist:l

# [internal]
$ npm run postinstall
```

## App structure

```bash
.                                   # root
├── build                            # directory for direct distributables
│   ├── electron-app                # directory for Electron app direct distributables
│   └── vue-app                     # directory for Vue app direct distributables
├── release                         # directory for built installers
├── src                             # directory for source code
│   ├── electron-app                # directory for Electron app source code
│   │   ├── assets                  # directory for Electron app assets
│   │   │   └── icon.png            # app icon for Electron app
│   │   └── main.js                 # main Electron app file
│   └── vue-app                     # directory for Vue app source code
│       ├── assets                  # directory for Vue app assets
│       ├── components              # directory for Vue app components
│       ├── styles                  # directory for Vue app styles
│       ├── App.vue                 # main Vue component file
│       ├── index.html              # main index file for Vue app
│       ├── index.scss              # main style file for Vue app
│       └── main.js                 # main Vue app file
├── electron-builder.yml            # Electron builder config for releases
├── extract_linux.sh                # Linux post-dist script
├── LICENCE                         # MIT licence
├── package-lock.json               # npm dependencies file
├── package.json                    # npm configuration file
├── postcss.config.js               # postcss configuration file
├── stylelint.config.js             # Eslint config file fo r
├── svgo.config.js                  # config for SVG files
├── webpack-electron-app.config.js  # Webpack configuration file for Electron app
└── webpack-vue-app.config.js       # Webpack configuration file for Vue app
```

---

## License

[MIT][mit]

[mit]: https://opensource.org/licenses/MIT


## Push/release with github action :
1) Update package.json version number (ex: 1.2.3)
2) Commit that change : git commit -am v1.2.3
3) Tag your commit : git tag v1.2.3
4) Push your commit and your tag : git push && git push --tags


## TODO 
- add database (rxbd)
- add updater notification
## Tips :

https://github.com/vue3/vue3-News/blob/master/asset/Vue3-CheatSheet02.jpeg
