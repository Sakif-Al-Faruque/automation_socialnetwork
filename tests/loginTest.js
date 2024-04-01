const {Browser, Builder, By, Key} = require('selenium-webdriver');



(async ()=> {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();

    try{
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

        if(username === "rocky sinha"){
            console.log('Test case is passed');
        }else{
            console.log('Test case is failed');
        }
         
        await driver.sleep(5000);
    }finally{
        await driver.quit();
    }
})();