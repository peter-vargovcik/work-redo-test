casper.start('http://localhost:58573/CasperJS/', function () {
    this.test.assertExists('input[name=shout]')
    this.capture('FirstPage.png')
})
casper.then(function () {
    this.fill('form', {
        'shout': 'scream'
    }, true)
    this.capture('FirstPageWithTextInForm.png')
})
casper.then(function () {
    this.test.assertSelectorHasText('h1', 'scream')
    this.test.assertSelectorHasText('h2', 'scream')
    this.test.assertSelectorHasText('h3', 'scream')
    this.test.assertSelectorHasText('h4', 'scream')
    this.test.assertSelectorHasText('h5', 'scream')
    this.test.assertSelectorHasText('h6', 'scream')
    this.capture('EchoPage.png')
})
casper.run(function () {
    this.test.done()
})