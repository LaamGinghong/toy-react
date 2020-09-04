class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild(component) {
    this.root.appendChild(component.root)
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null)
    this.children = []
    this._root = null
  }

  get root() {
    if (!this._root) {
      this._root = this.render().root
    }
    return this._root
  }

  setAttribute(name, value) {
    this.props[name] = value
  }

  appendChild(component) {
    this.children.push(component)
  }
}

export function render(component, parentComponent) {
  parentComponent.appendChild(component.root)
}

export function createElement(type, attributes, ...children) {
  let node
  if (typeof type === 'string') {
    node = new ElementWrapper(type)
  } else {
    node = new type()
  }

  for (const attribute in attributes) {
    node.setAttribute(attribute, attributes[attribute])
  }

  function insertChildren(children) {
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      if (typeof child === 'object' && child instanceof Array) {
        insertChildren(child)
      } else {
        node.appendChild(child)
      }
    }
  }

  insertChildren(children)

  return node
}
