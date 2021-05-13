// eslint-disable-next-line @typescript-eslint/no-var-requires
const chromedriver = require("chromedriver");
module.exports = (function (settings) {
    settings.test_workers = false;
    settings.webdriver.server_path = chromedriver.path;
    return settings;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
})(require("./nightwatch.json"));
