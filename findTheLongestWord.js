const findTheLongestWord = (string) => {
  const stringArray = string.match(/\w[a-z]{0,}/gi)
  let result = stringArray[0]

  for (let x = 1; x < stringArray.length; x++) {
    if (result.length < stringArray[x].length) return result = stringArray[x]
    return result
  }
}

console.log(findTheLongestWord("Web Development Tutorial"))
