function HtmlElement() {
  this.click = function() {
    console.log('Clicked')
  }
}

HtmlElement.prototype.focus = function() {
  console.log('Focused')
}

function HtmlSelectElement(items = []) {
  this.items = items
  this.addItem = function(value) {
    this.items.push(value)
  }
  this.removeItem = function(value) {
    const index = this.items.indexOf(value)
    this.items.splice(index, 1)
  }
}


HtmlSelectElement.prototype = new HtmlElement()
// HtmlSelecteElement.prototype.constructor = HtmlSelecteElement