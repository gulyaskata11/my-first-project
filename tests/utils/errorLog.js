const errorLog = ({ result, shouldBe }) => {
  console.log(
    '\x1b[31m',
    '❌ Failed test!\nresult is:',
    '\x1b[0m',
    result,
    '\x1b[31m',
    '\nbut it should be:',
    '\x1b[0m',
    shouldBe,
    '\n'
  )
}

module.exports = {
  errorLog
}
