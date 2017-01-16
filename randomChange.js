

function randomChange(text) {
  let spl = chance.bool() ? " " : ".";
  let len = text.split(spl)
  let rand = chance.integer({
    min: 0,
    max: len.length - 1
  })

  len.splice(rand, 1)
  return len.join(spl)


}
