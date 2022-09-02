const prompt = require('prompt-sync')();
const puppeteer = require('playwright').chromium;

console.clear();

let banner =`
      ██████╗  █████╗ ████████╗███╗   ███╗ ██████╗ ██████╗     ██╗   ██╗██████╗     ██████╗ 
      ██╔══██╗██╔══██╗╚══██╔══╝████╗ ████║██╔═══██╗██╔══██╗    ██║   ██║╚════██╗   ██╔═████╗
      ██████╔╝███████║   ██║   ██╔████╔██║██║   ██║██║  ██║    ██║   ██║ █████╔╝   ██║██╔██║
      ██╔══██╗██╔══██║   ██║   ██║╚██╔╝██║██║   ██║██║  ██║    ╚██╗ ██╔╝ ╚═══██╗   ████╔╝██║
      ██████╔╝██║  ██║   ██║   ██║ ╚═╝ ██║╚██████╔╝██████╔╝     ╚████╔╝ ██████╔╝██╗╚██████╔╝
      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝ ╚═════╝ ╚═════╝       ╚═══╝  ╚═════╝ ╚═╝ ╚═════╝ 
                                  Don't Worry Be $cr!pt                                                                                   
`
console.log(banner);

  async function fill_input(page, infoname, info) {
    const p = await page.$('input[name=' + infoname + ']');
    await p.focus();
    await page.keyboard.type(info);
  }
  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
console.log('[1] - Mode 1');
console.log('[2] - Mode 2');
let secenek = prompt('[Login] => ');

if(secenek == "1") {
  try {
    mod1()
  } catch(e) {}
}
if(secenek == "2") {
  try {
    mod2()
  } catch(e) {}
}

async function mod1() {
  const BROWSER_CONFIG = {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-infobars',
      '--disable-features=site-per-process',
      '--window-position=0,0',
      '--window-size=1600,900',
    ],
    defaultViewport: null,
    ignoreHTTPSErrors: true,
    headless: false,
  }
  
  const browser = await puppeteer.launch(BROWSER_CONFIG);
  const page = await browser.newPage();
  await page.setUserAgent('ctguard');
  await page.goto('https://yourwebsite.com/approval-queue/');
  await fill_input(page, 'login', 'username/e-mail');
  await fill_input(page, 'password', 'yourpassword');
  await sleep(90000);

  await anamain();

  setInterval(async() => {
    await page.reload();
    setTimeout(async() => {
      await anamain()
    }, 20000);
  }, 60000 * 2);

  async function anamain() {
  await page.evaluate(async() => {

    await startWorker()

  async function startWorker() {
      for (let i = 0; i < 6; i++) {
        setTimeout(async() => {

      let onay;
      let onay2;
      let onay3;
      let onay4;


      setTimeout(async() => {
        let asci = /^[\x00-\x7F çğıöşü]+$/g;
        let mesajbaslıgı = document.querySelectorAll(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${i}) > div > div > div > div > div.message-cell.message-cell--main > div > div.message-expandContent.js-expandContent > div > div > div.message-userContent > article > h4`);      
        if(mesajbaslıgı[0] && mesajbaslıgı[0].innerText) {
          if(!asci.test(mesajbaslıgı[0].innerText.toLowerCase()) == false) {
              onay = false;
          } else {
              onay = true;
          }
      } 
      }, 1000);

      setTimeout(async() => {
        let asci = /^[\x00-\x7F çğıöşü]+$/g;
      let mesaj = document.querySelector(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${i}) > div > div > div > div > div.message-cell.message-cell--main > div > div.message-expandContent.js-expandContent > div > div > div.message-userContent > article > div`)
      if(mesaj && mesaj.innerText) {
        if(asci.test(mesaj.innerText.toLowerCase()) == true) {
          onay2 = false;
      } else {
          onay2 = true;
      }
      }
      }, 2000);

      setTimeout(async() => {

      let mesajbaslıgı = document.querySelectorAll(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${i}) > div > div > div > div > div.message-cell.message-cell--main > div > div.message-expandContent.js-expandContent > div > div > div.message-userContent > article > h4`);      
      if(mesajbaslıgı[0] && mesajbaslıgı[0].innerText) {
        if(!yasaklıkelimeler.some(yasaklıkelime => mesajbaslıgı[0].innerText.toLowerCase().includes(yasaklıkelime))) { 
          onay3 = false;
        } else {
          onay3 = true;
        }
      } 
      }, 3000);

      setTimeout(async() => {
        let yasaklıkelimeler = ["words1"                 ,
        "words2"                ,
        "words3"]
        let mesaj = document.querySelector(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${i}) > div > div > div > div > div.message-cell.message-cell--main > div > div.message-expandContent.js-expandContent > div > div > div.message-userContent > article > div`)
     if(mesaj && mesaj.innerText) {
      if(!yasaklıkelimeler.some(yasaklıkelime => mesaj.innerText.toLowerCase().includes(yasaklıkelime))) { 
        onay4 = false;
    } else {
        onay4 = true;
    }
    }
      }, 4000);

      setTimeout(async() => {
        if(onay == true || onay2 == true || onay3== true || onay4== true) {
      await reddet(i);
    } else {
      await onayla(i);
    }
    async function reddet(id) {
      let konubutton = document.querySelector(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${id}) > div > div > div > div > div.message-cell.message-cell--extra > div > ul > li:nth-child(3) > label > input[type=radio]`)
      await konubutton.click()
    }
    async function onayla(id) {
      let konubutton = document.querySelector(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${id}) > div > div > div > div > div.message-cell.message-cell--extra > div > ul > li:nth-child(2) > label > input[type=radio]`)
      await konubutton.click()
    }
      }, 5000);

          }, i * 7000);

          setTimeout(async() => {
            await document.getElementsByClassName("button--primary button button--icon button--icon--save")[0].click();
          }, 7000 * 7);     
          
        }
      }
})
  }
}

async function mod2() {
  
    const BROWSER_CONFIG = {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--disable-features=site-per-process',
        '--window-position=0,0',
        '--window-size=1600,900',
      ],
      defaultViewport: null,
      ignoreHTTPSErrors: true,
      headless: false,
    }
    
    const browser = await puppeteer.launch(BROWSER_CONFIG);
    const page = await browser.newPage();
    await page.goto('https://yourwebsite.com/approval-queue/');
    await fill_input(page, 'login', 'username/e-mail');
    await fill_input(page, 'password', 'yourpassword'); 
    await sleep(90000);
  
    await anamain()

setInterval(async() => {
    await page.reload();
    setTimeout(async() => {
      await anamain()
    }, 20000);
}, 60000 * 2);

   async function anamain() {
  await page.evaluate(async() => {

  await startWorker()

    async function startWorker() {
        for (let i = 0; i < 6; i++) {
          setTimeout(async() => {
  
        let onay3;
        let onay4;

        setTimeout(async() => {
        let yasaklıkelimeler = ["words1"                 ,
        "words2"                ,
        "words3"]
        let mesajbaslıgı = document.querySelectorAll(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${i}) > div > div > div > div > div.message-cell.message-cell--main > div > div.message-expandContent.js-expandContent > div > div > div.message-userContent > article > h4`);      
        if(mesajbaslıgı[0] && mesajbaslıgı[0].innerText) {
          if(!yasaklıkelimeler.some(yasaklıkelime => mesajbaslıgı[0].innerText.toLowerCase().includes(yasaklıkelime))) { 
            onay3 = false;
          } else {
            onay3 = true;
          }
        } 
        }, 3000);
  
        setTimeout(async() => {
        let yasaklıkelimeler = ["words1"                 ,
        "words2"                ,
        "words3"]
          let mesaj = document.querySelector(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${i}) > div > div > div > div > div.message-cell.message-cell--main > div > div.message-expandContent.js-expandContent > div > div > div.message-userContent > article > div`)
       if(mesaj && mesaj.innerText) {
        if(!yasaklıkelimeler.some(yasaklıkelime => mesaj.innerText.toLowerCase().includes(yasaklıkelime))) { 
          onay4 = false;
      } else {
          onay4 = true;
      }
      }
        }, 4000);
  
        setTimeout(async() => {
          if(onay3== true || onay4== true) {
        await reddet(i);
      } else {
        await onayla(i);
      }
      async function reddet(id) {
        let konubutton = document.querySelector(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${id}) > div > div > div > div > div.message-cell.message-cell--extra > div > ul > li:nth-child(3) > label > input[type=radio]`)
        await konubutton.click()
      }
      async function onayla(id) {
        let konubutton = document.querySelector(`#top > div.p-body > div > div.p-body-main.p-body-main--withSideNav > div.p-body-content > div.p-body-pageContent > form > div > div:nth-child(${id}) > div > div > div > div > div.message-cell.message-cell--extra > div > ul > li:nth-child(2) > label > input[type=radio]`)
        await konubutton.click()
      }
        }, 5000);
            }, i * 7000);

            setTimeout(async() => {
              await document.getElementsByClassName("button--primary button button--icon button--icon--save")[0].click();
            }, 7000 * 7);         
           }
        }
  })
  }
  }