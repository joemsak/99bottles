class BottleNumber {
  static for(number) {
    switch(number) {
      case 0:
        return new BottleNumber0(number)
      case 1:
        return new BottleNumber1(number)
      case 6:
        return new BottleNumber6(number)
      default:
        return new BottleNumber(number)
    }
  }

  constructor(number) {
    this.number = number
  }

  successor() {
    return this.number - 1
  }

  container() {
    return 'bottles'
  }

  pronoun() {
    return 'one'
  }

  quantity() {
    return this.number
  }

  action() {
    return `Take ${this.pronoun()} down, pass it around`
  }

  toString() {
    return [this.quantity(), this.container()].join(' ')
  }
}

class BottleNumber0 extends BottleNumber {
  successor() {
    return 99
  }

  action() {
    return "Go to the store, steal some more"
  }

  quantity() {
    return 'No more'
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return 'bottle'
  }

  pronoun() {
    return 'it'
  }
}

class BottleNumber6 extends BottleNumber {
  container() {
    return 'six-pack'
  }

  quantity() {
    return 1
  }

  pronoun() {
    return 'a bottle'
  }
}

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
