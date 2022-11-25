const pageScraper = {
  url: "https://www.tyjobs.com",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log("Navigating to ${this.url}..");
    await page.goto(this.url);
  },
};

export default pageScraper;