Stapp frontend
========

* React 16, Redux 4, Router 4, Webpack 4
* Domain-Driven File Structuring React/Redux
* No CSS frameworks (minimal styles starter)
* HMR support
* Scaffolding feature (generate CRUD things)
* Easy deploy ot GitHub pages

## Development

Clone the repo, and install dependencies

```
git clone git@github.com:theaidem/stapp.git ./project_name
cd project_name && yarn
```

Start dev server

```
yarn start
```

Open app in [localhost](http://localhost:3001/)

Change your code, hot reload is enabled, enjoy that)

If your application will works with API server you should define ``API_ROOT`` constant in config.

```
cp source/scripts/app/config.example.js source/scripts/app/config.js
```

edit the configuration. Research `source/scripts/app/services/API.js` how it works with API requests (so easy).

## Scaffolding (code generation)

You can generate basic code for your CRUD flow. Avalible to generate redux actions and reducer, also yo can create react containers connected to redux store.

```
yarn run gen
```

Follow instructions, and see generated files. If you generated reducers, make sure you must import and combine that into `source/scripts/app/reducers.js` manually. Also you should define routes in `source/scripts/app/router.jsx`


## Build project

```
yarn run build
```

Check `./dist` folder, it's your production ready static files.
Profit!

## GitHub pages?

```
yarn run deploy:gh-pages
```

Make sure the application repo should hosted at github.
Follow to http://{your-name}.github.io/{app-name} and you rock!
