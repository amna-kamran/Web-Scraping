const puppeteer = require('puppeteer')
import { Browser } from "puppeteer"

const url = 'https://books.toscrape.com/'

const main = async()=>{
    const browser : Browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto(url)
}

main()