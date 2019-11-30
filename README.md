# webpack-issue-repro

`./src/script.js` is meant to be executed within a new Function() like this (eg : [grafana' scripted dashboards](https://grafana.com/docs/reference/scripting/))

When bundling it with webpack, the result is not the same.

### Reproduction

> `npm run start`

Please see `./src/index.js`
