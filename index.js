import browserObject from './browser.js'
import {scrapeAll} from './pageController.js'

//start the browser to create a browser instance
let browserInstance = browserObject();

//passing the browser to the scraper controller
scrapeAll(browserInstance)