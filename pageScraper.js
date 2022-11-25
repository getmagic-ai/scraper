const pageScraper = {
  url: "https://ytjobs.co/talent/search",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log("Navigating to ${this.url}..");
    await page.goto(this.url);
    //wait for the required part of the DOM to be rendered
    await page.waitForSelector(
      "section > div.CardsSection__CardContainer-sc-1yspe55-6.hfAnid"
    );
    let urls = await page.$$eval(
      "#root > main > div > section.Layout__PageContentContainer-sc-ilevs7-2.hERlxi > section > div.CardsSection__CardContainer-sc-1yspe55-6.hfAnid > div:nth-child(2) > a > a > div.sc-hKMtZM.iDAaGo > div > div.Verified__Container-sc-1xl2zn8-0.bNPSwL",
      (links) => {
        return links;
      }
    );
    console.log(urls);
  },
};

export default pageScraper;
