/* global describe, it */
import assert from 'assert'

import JavaScriptComponent from '../JavaScriptComponent'

let tempElement = document.createElement('DIV')
tempElement.className = 'container'
document.body.appendChild(tempElement)

let selector = '.container'
let component = new JavaScriptComponent(selector)
component.attach()

let outputElement = document.querySelector('#component-output')
describe('Basic tests', () => {
  it('Renders', () => {
    assert.equal(document.querySelectorAll('.javascript-component').length, 1)
  })
  it('handles button clicks', (done) => {
    document.querySelector('.my-button-1').dispatchEvent(new window.Event('click'))
    setTimeout(() => {
      assert.equal(outputElement.innerHTML, 'hello-world')
      done()
    }, 0)
  })
})
