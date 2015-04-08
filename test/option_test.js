var test = require('tap').test
var option = require('../option')

var h = require('mercury').h

test('basic select control', function (t) {
  t.deepEquals(
    h('option', { value: 'red'}, 'Red'),
    option('Red')
  )
  t.end()
})