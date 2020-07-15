export default class BottleSong {
  constructor() {
    this.default = 99
    this.bottles = 0
  }

  verse(bottles) {
    switch(bottles) {
      case 0:
        return [
          "No more bottles of beer on the wall",
          "No more bottles of beer",
          "Go to the store, steal some more",
          "99 bottles of beer on the wall."
        ].join('\n')
      case 1:
        return [
          "1 bottle of beer on the wall",
          "1 bottle of beer",
          "Take it down, pass it around",
          "No more bottles of beer on the wall."
        ].join('\n')
      case 2:
        return [
          "2 bottles of beer on the wall",
          "2 bottles of beer",
          "Take one down, pass it around",
          "1 bottle of beer on the wall."
        ].join('\n')
      default:
        return [
          `${bottles} bottles of beer on the wall`,
          `${bottles} bottles of beer`,
          "Take one down, pass it around",
          `${bottles - 1} bottles of beer on the wall.`
        ].join('\n')
    }
  }
}
