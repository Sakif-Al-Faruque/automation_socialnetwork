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

        await driver.sleep(1000);
        let field = 'names';
        await driver.executeScript(`document.querySelector('select[name="location"]').value = '${field}';`);

        await driver.sleep(500);
        await driver.findElement(By.name('query')).sendKeys('p');

        await driver.sleep(500);
        await driver.findElement(By.id('querybutton')).click();
        
         
        await driver.sleep(5000);
    }finally{
        await driver.quit();
    }
})();