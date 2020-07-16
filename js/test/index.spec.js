import { expect } from 'chai'
import { BottleSong } from '../src'

describe('BottleSong', () => {
  describe('#verse', () => {
    it('returns the 0 bottles case', () => {
      const expected = 'No more bottles of beer on the wall\n' +
        'No more bottles of beer\n' +
        'Go to the store, steal some more\n' +
        '99 bottles of beer on the wall.'

      expect(new BottleSong().verse(0)).to.equal(expected)
    })

    it('returns the 1 bottle case', () => {
      const expected = '1 bottle of beer on the wall\n' +
        '1 bottle of beer\n' +
        'Take it down, pass it around\n' +
        'No more bottles of beer on the wall.'

      expect(new BottleSong().verse(1)).to.equal(expected)
    })

    it('returns the 2 bottles case', () => {
      const expected = '2 bottles of beer on the wall\n' +
        '2 bottles of beer\n' +
        'Take one down, pass it around\n' +
        '1 bottle of beer on the wall.'

      expect(new BottleSong().verse(2)).to.equal(expected)
    })

    it('returns the six-pack case', () => {
      const expected = '1 six-pack of beer on the wall\n' +
        '1 six-pack of beer\n' +
        'Take one down, pass it around\n' +
        '5 bottles of beer on the wall.'

      expect(new BottleSong().verse(6)).to.equal(expected)
    })

    it('returns the 7 case', () => {
      const expected = '7 bottles of beer on the wall\n' +
        '7 bottles of beer\n' +
        'Take one down, pass it around\n' +
        '1 six-pack of beer on the wall.'

      expect(new BottleSong().verse(7)).to.equal(expected)
    })


    it('returns the default bottles case', () => {
      for (let n = 3; n <= 5; n++) {
        const expected = `${n} bottles of beer on the wall\n` +
          `${n} bottles of beer\n` +
          'Take one down, pass it around\n' +
          `${n - 1} bottles of beer on the wall.`

        expect(new BottleSong().verse(n)).to.equal(expected)
      }

      for (let n = 8; n <= 99; n++) {
        const expected = `${n} bottles of beer on the wall\n` +
          `${n} bottles of beer\n` +
          'Take one down, pass it around\n' +
          `${n - 1} bottles of beer on the wall.`

        expect(new BottleSong().verse(n)).to.equal(expected)
      }
    })
  })
})
