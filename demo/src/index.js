import TypeScriptComponent from '../../src/JavaScriptComponent'

function init () {
  let selector = '.container'
  let component = new TypeScriptComponent(selector)
  component.attach()
}

init()
