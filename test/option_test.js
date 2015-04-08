var test = require('tap').test
var option = require('../option')

var h = require('virtual-dom/h')

test('basic select control', function (t) {
  t.deepEquals(
    h('option', { value: 'red'}, 'Red'),
    option('Red')
  )
  t.end()
})