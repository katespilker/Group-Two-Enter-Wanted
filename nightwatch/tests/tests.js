const data = require('../supporting/data')
module.exports = {
        beforeEach: browser => {
            browser.url ('http://localhost:3000/')
        },
        After: browser => {
            browser.end()
        }

        
}