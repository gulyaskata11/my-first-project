const passedLog = (text) => {
  console.log(
    '\x1b[32m',
    '✔️ passed test case - result is:',
    '\x1b[0m',
    text,
    '\n'
  )
}

module.exports = {
  passedLog
}
