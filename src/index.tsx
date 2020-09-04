interface Props {
  [key: string]: any
}

function createElement(tagName: string, props: Props, ...children) {
  let e = document.createElement(tagName)
  for (const prop in props) {
    e.setAttribute(prop, props[prop])
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }
    e.appendChild(child)
  }

  return e
}

// @ts-ignore
document.body.appendChild(
  <div id="a" class="b">
    <div>123</div>
    <div></div>
    <div></div>
  </div>,
)

export {}
