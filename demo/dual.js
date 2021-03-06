
var React = require('react')

var treed = require('../')
var data = require('./demo-data')
var IxPL = require('../pl/ixdb')

window.React = React

var plugins = [
  require('../plugins/undo'),
  require('../plugins/tags'),
  require('../plugins/rebase'),
  require('../plugins/collapse'),
  require('../plugins/done'),
]

var start = Date.now()
treed.quickstart('#example', {
  plugins: plugins,
  storeOptions: {
    data: data,
    pl: new IxPL(),
  },
}, (err, store, keys, storeView) => {
  console.log((Date.now() - start) + 'ms to render')
  window.store = store
  window.actions = storeView.actions
  window.storeView = storeView

  treed.initView(document.getElementById('right-side'), store, keys, plugins, {}, (otherView) => {
    window.sideView = otherView
  })
})


