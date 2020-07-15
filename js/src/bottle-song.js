export default class BottleSong {
  constructor() {
    this.default = 99
    this.bottles = 0
  }

  verse(bottles) {
    this.bottles = bottles

    return [
      this.usualStatus(),
      this.getSubject(),
      this.getAction(),
      this.nextStatus()
    ].join('\n')
  }

  usualStatus(opts = {}) {
    return `${this.getSubject()} on the wall${opts.usePeriod ? '.' : ''}`
  }

  getSubject() {
    const howMany = this.noBottles() ? 'No more' : this.bottles
    const quantified = this.oneBottle() ? 'bottle' : 'bottles'

    return `${howMany} ${quantified} of beer`
  }

  getAction() {
    if (this.noBottles()) {
      return 'Go to the store, steal some more'
    } else {
      return `Take ${this.oneBottle() ? 'it' : 'one'} down, pass it around`
    }
  }

  nextStatus() {
    if (this.noBottles()) {
      this.bottles = this.default
    } else {
      this.bottles -= 1
    }

    return this.usualStatus({ usePeriod: true })
  }

  noBottles() {
    return this.bottles === 0
  }

  oneBottle() {
    return this.bottles === 1
  }
}
