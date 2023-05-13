const puppeteer = require('puppeteer')
import { Browser } from "puppeteer"

const url = 'https://books.toscrape.com/'

const main = async()=>{
    const browser : Browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto(url)

    //evaluating the page gives us a document
    const bookData = await page.evaluate(()=>{
        const bookPods =  Array.from(document.querySelectorAll('.product_pod'))
        //what data do we want from each book pod?
        //using map method to apply a function that extracts the required data from each pod
        //the function that we will be mapping the book pods to will take
        //an input of book with type any
        const data = bookPods.map((book:any)=>({
            title: book.querySelector('h3 a').getAttributes('title'),
            price: book.querySelector('.price_color').innerText,
            
        }))
    })
    console.log(bookData)
    }

main()