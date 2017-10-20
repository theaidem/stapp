Stapp frontend
========

## Development

Clone the repo, and install dependencies

```
git clone git@github.com:theaidem/stapp.git ./project_name
cd project_name && npm i
```

Start dev server

```
npm start
```

Open app in [localhost](http://localhost:3001/)

Change your code, hot reload is enabled, enjoy that)

## Scaffolding (code generation)

You can generate basic code for your CRUD flow. Avalible to generate redux actions and reducer, also yo can create react containers connected to redux store.

```
npm run gen
```

Follow instructions, and see generated files. If you generated reducers, make sure you must import and combine that into `source/scripts/reducers/index.js` manually.


## Build project

```
npm run build
```

Check `./dist` folder, it's your production ready static files.
Profit!
