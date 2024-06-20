function HtmlElement() {
  this.click = function () {
    console.log("Clicked")
  }
}

HtmlElement.prototype.focus = function () {
  console.log("Focused")
}

function HtmlSelectElement(items = []) {
  this.items = items
  this.addItem = function (value) {
    this.items.push(value)
  }
  this.removeItem = function (value) {
    const index = this.items.indexOf(value)
    this.items.splice(index, 1)
  }
  this.render = function () {
    // const options = items.map((i) => `<option>${i}</option>\n`).join("")
    return `
<select>${items.map((i) => `
  <option>${i}</option>`).join("")}
</select>`
  }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

function HtmlImageElement(src = undefined) {
  this.src = src
  this.render = function () {
    return `<img src='${this.src}' />`
  }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://abc.com"),
]

for (ele of elements) {
  console.log(ele.render())
}
