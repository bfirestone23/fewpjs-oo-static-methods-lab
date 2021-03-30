class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s-']+/g, '')
  }

  static titleize(string) {
    const badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
      if (i == 0) {
        result.push(this.capitalize(words[i]))
      } else {
        if (badWords.includes(words[i])) {
          result.push(words[i])
        } else {
          result.push(this.capitalize(words[i]))
        }
      }
    }

    return result.join(' ');

  }

}