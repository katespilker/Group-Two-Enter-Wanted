const selectors = require('../supporting/selectors')
const data = require('../supporting/data')

module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')

    },
    after : browser => {
        browser.end()
    },
    "WQ27" : browser => {
        browser
            .click(selectors.buttons.menuIcon)
            .click(selectors.buttons.enterOption)
            .waitForElementVisible(selectors.fields.hdrInput, 2000)
            .setValue(selectors.fields.hdrInput, data.WQ27.hdr)
            .setValue(selectors.fields.mkeInput, data.WQ27.mke)
            .setValue(selectors.fields.oriInput, data.WQ27.ori)
            .setValue(selectors.fields.namInput, data.WQ27.nam)
            .click(selectors.fields.sexInput, data.WQ27.sex)


    }
}