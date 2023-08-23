const obj = {
    foo: 42,
    bar: {
       field: 'value'
    }
}

Object.freeze(obj)

obj.bar.field = 1

const res = obj.bar.field