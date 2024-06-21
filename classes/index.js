const _items = new WeakMap()

class Stack {
  constructor() {
    _items.set(this, [])
  }

  push(obj) {
    _items.get(this).push(obj)
  }

  peek() {
    const items = _items.get(this)
    if(items.length === 0) return new Error("Stack is empty")
    return items[items.length-1]
  }

  pop(){
    const items = _items.get(this)
    if(items.length === 0) return new Error("Stack is Empty")
    return items.pop()
  }
  get count() {
    return _items.get(this).length
  }
}

const s = new Stack()