var h = require('virtual-dom/h')
var xtend = require('xtend')

module.exports = function (text, attributes) {
  var attrs = xtend({ value: text.toLowerCase() }, attributes)
  return h('option', attrs, text)
}