module.exports = {
  "test pagination": function (browser) {
    browser
      .url("http://localhost:4000/")
      .waitForElementVisible("body")
      .assert.titleContains("Assignment10")
      .assert.containsText("#root > span:nth-child(2)", "0")
      .click("#root > button:nth-child(1)")
      .assert.containsText("#root > span:nth-child(2)", "0")
      .click("#root > button:nth-child(3)")
      .assert.containsText("#root > span:nth-child(2)", "1")
      .click("#root > button:nth-child(3)")
      .assert.containsText("#root > span:nth-child(2)", "2")
      .click("#root > button:nth-child(3)")
      .assert.containsText("#root > span:nth-child(2)", "3")
      .click("#root > button:nth-child(3)")
      .assert.containsText("#root > span:nth-child(2)", "4")
      .click("#root > button:nth-child(3)")
      .assert.containsText("#root > span:nth-child(2)", "5")
      .click("#root > button:nth-child(3)")
      .assert.containsText("#root > span:nth-child(2)", "5")
      .click("#root > button:nth-child(1)")
      .assert.containsText("#root > span:nth-child(2)", "4")
      .end();
  },
};
