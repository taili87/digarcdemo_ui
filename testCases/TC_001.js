

describe("Test Suite", function(){

    it("Open Any browser and navigateand Validate url", function(){
       browser.ignoreSynchronization = true;
        var baseURL = 'https://www.digarc.com/';
        browser.get(baseURL);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe("Connected Curriculum - DIGARC"); // Validate Title of the Page
        element(by.xpath("//a[contains(text(),'Careers')]")).click();  
        element(by.id('search_keywords')).sendKeys("ASSOCIATE");
        element(by.xpath("//input[@value='Search Jobs']")).click();
        expect(browser.getCurrentUrl()).toBe('https://www.digarc.com/careers/');
        browser.sleep(5000);
       
        })

        
});