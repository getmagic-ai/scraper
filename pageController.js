import pageScraper from "./pageScraper.js";

export async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (error) {
    console.log("could not resolve browser isntance -> ", error);
  }
}

//module.exports = (browserInstance) => scrapeAll(browserInstance)