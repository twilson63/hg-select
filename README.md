# Mercury Select Control

This module is a pure virtual hyperscript select control

## usage

```
var select = require('select')
var option = require('option')

function render () {
  return h('form', [
    select('foo.u-full-width', ['bar', 'baz', 'bam'].map(option))
  ])
}
```

## install

```
npm i hg-select
```

