import React from 'react'
import {mount, render, shallow} from 'enzyme'
import Checked from '../src/Checked'

const wrapper = shallow(<Checked />)

describe('#checked', () => {
  describe('()', () => {
    it('passes when the actual matches the expected 1', (wrapper) => {
      expect(wrapper.find('#checked')).to.be.checked()
    })

    it('passes negated when the actual does not match the expected 2', (wrapper) => {
      expect(wrapper.find('#not')).to.not.be.checked()
    })

    it('fails when the actual does not match the expected 3', (wrapper) => {
      expect(() => {
        expect(wrapper.find('#not')).to.be.checked()
      }).to.throw('to be checked')

      expect(() => {
        expect(wrapper.find('#checked')).to.not.be.checked()
      }).to.throw('not to be checked')
    })

    it('fails when the actual is undefined 4', () => {
      expect(() => {
        expect(undefined).to.be.checked()
      }).to.throw()
    })
  })
})
