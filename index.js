var h = require('mercury').h
var xtend = require('xtend')
var isArray = require('is-array')
var capitalize = require('capitalize')

module.exports = function (n, attributes, options) {
  if (!options && isArray(attributes)) {
    options = attributes
    attributes = {}
  }

  var a = n.split('.')
  var name = a.shift()
  var className = a.join(' ')

  var attrs = xtend({
    className: className,
    id: name,
    name: name
  }, attributes)

  return h('fieldset', [
    h('label', { htmlFor: name }, capitalize(name)),
    h('select', attrs, options)
  ])
}