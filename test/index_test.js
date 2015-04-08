var test = require('tap').test
var select = require('../')
var option = require('../option')

var h = require('virtual-dom/h')

test('basic select control', function (t) {
  t.deepEquals(
    h('fieldset', [
      h('label', { htmlFor: 'color'}, 'Color'),
      h('select.u-full-width', { id: 'color', name: 'color'}, [
        h('option', { value: 'red'}, 'Red'),
        h('option', { value: 'blue'}, 'Blue'),
        h('option', { value: 'green'}, 'Green')
      ])
    ]),
    select('color.u-full-width', [
      option('Red', { value: 'red'}),
      option('Blue', { value: 'blue'}),
      option('Green', { value: 'green'})
    ])
  )
  t.end()
})