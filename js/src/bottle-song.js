import BottleNumber from './bottle-number'

export default class BottleSong {
  verse(number) {
    const bottleNumber = BottleNumber.for(number)
    const nextBottleNumber = BottleNumber.for(bottleNumber.successor())

    return [
      `${bottleNumber} of beer on the wall`,
      `${bottleNumber} of beer`,
      bottleNumber.action(),
      `${nextBottleNumber} of beer on the wall.`
    ].join('\n')
  }
}
