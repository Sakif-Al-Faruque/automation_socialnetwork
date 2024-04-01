const { describe } = require('mocha');
const assert = require('assert');
const {Builder, By, Key, Browser} = require('selenium-webdriver');

describe('login', async function (){
    this.timeout(0);
    let driver;

    it('login with valid information', async ()=>{
        driver = await new Builder().forBrowser(Browser.CHROME).build();

        await driver.get('http://localhost/project/socialnetwork/index.php');

        await driver.sleep(1000);
        await driver.findElement(By.name('useremail')).sendKeys('rs.expoit123@gmail.com');

        await driver.sleep(1000);
        await driver.findElement(By.name('userpass')).sendKeys('123456');

        await driver.sleep(500);
        await driver.findElement(By.name('login')).sendKeys(Key.RETURN);

        await driver.sleep(500);
        await driver.findElement(By.css('a[href="profile.php"]')).click();

        await driver.sleep(500);
        let profileElementContent = await driver.executeScript(`return document.querySelector('body > div > div.profile > center > a').innerText`);
        let username = profileElementContent.split('\n')[0];
        /* console.log(username); */

        /* if(username === "rocky sinh"){
            console.log('Test case is passed');
        }else{
            console.log('Test case is failed');
        } */

        assert.equal(username, 'rocky sinha');
         
        await driver.sleep(5000);
    });

    this.afterEach(async ()=> {
        await driver.quit();
    });
});