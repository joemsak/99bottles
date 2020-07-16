export default class BottleSong {
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
      default:
        return [
          `${bottles} bottles of beer on the wall`,
          `${bottles} bottles of beer`,
          "Take one down, pass it around",
          `${bottles - 1} ${this.container(bottles - 1)} of beer on the wall.`
        ].join('\n')
    }
  }

  container(number) {
    if (number === 1) {
      return 'bottle'
    } else {
      return 'bottles'
    }
  }
}
