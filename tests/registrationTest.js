const {Browser, By, Builder, Key} = require('selenium-webdriver');

(async ()=>{
    const driver = await new Builder().forBrowser(Browser.CHROME).build();

    try{
        await driver.get('http://localhost/project/socialnetwork/index.php');


        await driver.sleep(500);
        await driver.findElement(By.id('link2')).click();

        let userFirstName = 'Bob';
        await driver.sleep(500);
        await driver.findElement(By.id('userfirstname')).sendKeys(userFirstName);
        
        let userLastName = 'Rason';
        await driver.sleep(500);
        await driver.findElement(By.id('userlastname')).sendKeys(userLastName);

        await driver.sleep(500);
        await driver.findElement(By.id('usernickname')).sendKeys('MMM');

        await driver.sleep(500);
        await driver.findElement(By.id('userpass')).sendKeys('963');

        await driver.sleep(500);
        await driver.findElement(By.id('userpassconfirm')).sendKeys('963');

        await driver.sleep(500);
        await driver.findElement(By.id('useremail')).sendKeys('bob@gmail.com');


        await driver.sleep(500);
        let dobDay = '4';
        await driver.executeScript(`document.querySelector('select[name="selectday"').value = ${dobDay};`);

        await driver.sleep(500);
        let dobMonth = '2';
        await driver.executeScript(`document.querySelector('select[name="selectmonth"').value = ${dobMonth};`);

        await driver.sleep(500);
        let dobYear = '2014';
        await driver.executeScript(`document.querySelector('select[name="selectyear"').value = ${dobYear};`);



        await driver.sleep(500);
        await driver.findElement(By.id('malegender')).click();

        await driver.sleep(500);
        await driver.findElement(By.id('userhometown')).sendKeys('dakota');

        await driver.sleep(500);
        await driver.findElement(By.id('singlestatus')).click();

        await driver.sleep(500);
        await driver.findElement(By.id('userabout')).sendKeys('something');


        await driver.sleep(500);
        await driver.findElement(By.name('register')).click();



        await driver.sleep(500);
        await driver.findElement(By.css('a[href="profile.php"]')).click();

        let profileElementContent = await driver.executeScript(`return document.querySelector('body > div > div.profile > center').innerText`);
        let username = profileElementContent.split('\n')[0];

        /* console.log(username); */

        let inputUsername = userFirstName+" "+userLastName;
        if(inputUsername === username){
            console.log('test case is passed');
        }else{
            console.log('test case is failed');
        }

        await driver.sleep(5000);
    }finally{
        driver.quit();
    }
})();