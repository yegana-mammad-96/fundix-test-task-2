// test/login.test.js

describe('Fundix - Login with Real Credentials', () => {
  it('should login with aisana.b+1@amegacorp.com', async () => {

    
    const emailLabel = await $('//android.widget.TextView[@text="Enter your email"]');
    await emailLabel.waitForDisplayed({ timeout: 15000 });

    
    const emailInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    await emailInput.setValue('aisana.b+1@amegacorp.com');

    
    const passwordLabel = await $('//android.widget.TextView[@text="Enter Password"]');
    await passwordLabel.waitForDisplayed({ timeout: 10000 });

    
    const passwordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    await passwordInput.setValue('Tester01');

    
    const continueButton = await $('//android.widget.TextView[@text="Continue"]');
    await continueButton.waitForDisplayed({ timeout: 10000 });
    await continueButton.click();


    const successIndicator = await $('//*[contains(@text, "Welcome") or contains(@text, "Fundix") or contains(@resource-id, "home")]');
    await expect(successIndicator).toBeDisplayed({ timeout: 15000 });

    
    await browser.pause(3000);
  });
});
describe('Fundix app – Markets section', () => {
  it('should find XPath and click on it', async () => {

    
    const marketsButton = await $('//android.view.ViewGroup[@content-desc="Markets"]/com.horcrux.svg.SvgView/com.horcrux.svg.B/com.horcrux.svg.J');

    
    await marketsButton.waitForDisplayed({ timeout: 10000 });

    console.log('Element found');

    
    await marketsButton.click();

    
    await driver.pause(2000);


});
describe('Fundix app – Click on USDJPY', () => {
  it('should find  USDJPY by XPath and click on it', async () => {

    
    const usdjpyElement = await $('//android.widget.TextView[@resource-id="markets_currencyPriceCard_name_text" and @text="USDJPY"]');

    /
    await usdjpyElement.waitForDisplayed({ timeout: 10000 });

    console.log('Element found');

    
    await usdjpyElement.click();

    
    await driver.pause(2000);
 });
});
describe('Fundix app – Click on H1 period filter', () => {
  it('should find by XPath and click on it', async () => {


    const h1Filter = await $('//android.widget.TextView[@resource-id="assetDetails_periodFilterList_item_h1"]');

   
    await h1Filter.waitForDisplayed({ timeout: 10000 });

    console.log('Element found');

    
    await h1Filter.click();

    
    await driver.pause(2000);


  });
});
describe('Fundix app – XPath element checks', () => {


  it('should find "Sell and click on it"', async () => {
    const sellButton = await $('//android.widget.TextView[@text="Sell"]');
    await sellButton.waitForDisplayed({ timeout: 5000 });
    console.log('Element found');
    await sellButton.click();
    await driver.pause(1000);
  });


  it('should find element with id "Quote currency"', async () => {
    const quoteCurrency = await $('//android.widget.TextView[@text="Quote currency"]');
    await quoteCurrency.waitForDisplayed({ timeout: 5000 });
    console.log('Element found');
    await quoteCurrency.click();
    await driver.pause(1000);
  });



  it('should find SvgView in Portfolio and click on it', async () => {
    const svgView = await $('//android.view.ViewGroup[@content-desc="Portfolio"]/com.horcrux.svg.SvgView');
    await svgView.waitForDisplayed({ timeout: 5000 });
    console.log('Element SvgView found');
    await svgView.click();
    await driver.pause(1000);
  });


  it('should find element resource-id "portfolio_headerCard_title_text" and click on it', async () => {
    const headerTitle = await $('//android.widget.TextView[@resource-id="portfolio_headerCard_title_text"]');
    await headerTitle.waitForDisplayed({ timeout: 5000 });
    console.log('Element portfolio_headerCard_title_text found');
    await headerTitle.click();
    await driver.pause(1000);
  });
});

  it('should find and click USDJPY', async () => {
    const position = await $('//android.view.ViewGroup[@content-desc="USDJPY, Sell, -$16.1, 5,000 USD at 153.52700"]');
    await position.waitForDisplayed({ timeout: 10000 });
    console.log('Element USDJPY found');
    await position.click();
    await driver.pause(2000);
  });



  it('should find by XPath and click on Close', async () => {
    const closeButton = await $('//android.view.ViewGroup[@content-desc="Close"]');
    await closeButton.waitForDisplayed({ timeout: 10000 });
    console.log('Button Close found');
    await closeButton.click();
    await driver.pause(2000);
  });


  it('check existence of portfolio_emptyList_title_text', async () => {
    const emptyListText = await $('//android.widget.TextView[@resource-id="portfolio_emptyList_title_text"]');
    await emptyListText.waitForDisplayed({ timeout: 10000 });
    console.log('Текст portfolio_emptyList_title_text отображается');
    const textValue = await emptyListText.getText();
    console.log('Element:', textValue);
    await driver.pause(1000);
  });



  it('should find by XPath and click on SvgView', async () => {
    const avatar = await $('//android.view.ViewGroup[@resource-id="headerAvatar"]/com.horcrux.svg.SvgView');
    await avatar.waitForDisplayed({ timeout: 10000 });
    console.log('SvgView found');
    await avatar.click();
    await driver.pause(2000);
  });



  it(' should find and click on Sign Out', async () => {
    const signOut = await $('//android.widget.TextView[@text="Sign Out"]');
    await signOut.waitForDisplayed({ timeout: 10000 });
    console.log('Element Sign Out found');
    await signOut.click();
    await driver.pause(2000);
  });



  it('should find Log out by XPath and click on it ', async () => {
    const logOut = await $('//android.widget.TextView[@text="Log out"]');
    await logOut.waitForDisplayed({ timeout: 10000 });
    console.log('Element Log out found');
    await logOut.click();
    await driver.pause(2000);
  });
});