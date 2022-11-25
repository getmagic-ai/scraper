import puppeteer from "puppeteer";

export default async function startBrowser() {
  let browser;
  try {
    console.log("opening the chromium browser...");
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log("could not create a browser instance...", err);
  }
  return browser;
}
