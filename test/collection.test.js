import $ from '../src/index'
import {expect} from 'chai'
import {beforeEach, afterEach} from './helper'

describe('Collection', function () {
  this.beforeEach(beforeEach)
  this.afterEach(afterEach)

  it('eq', function () {
    const $div = $('div').eq(1)
    expect($div.length).to.be.equal(1)
    expect($div[0].className).to.be.equal('simple-dom-query')
    expect($div).to.be.instanceOf($.simpleDomQuery.init)
  })

  it('eq minus index', function () {
    const $div = $('div').eq(-2)
    expect($div.length).to.be.equal(1)
    expect($div[0].className).to.be.equal('simple-dom-query')
    expect($div[0]).to.be.equal($('div').eq(1)[0])
    expect($div).to.be.instanceOf($.simpleDomQuery.init)
  })

  it('map', function () {
    const $div = $('div')
    $div.map((elem, index) => {
      expect(elem.nodeType).to.be.equal(1)
      expect(index).to.be.a('number')
      expect(index).to.most(3)
      expect(index).to.be.above(-1)
    })
  })

  it('filter', function () {
    expect($('div').filter(() => false)).to.be.length(0)
    expect($('div').filter(() => true)).to.be.length(3)
    const $filter = $('div').filter(elem => elem.className === 'simple-dom-query')
    expect($filter).to.be.length(1)
    expect($filter[0].className).to.equal('simple-dom-query')
  })
})