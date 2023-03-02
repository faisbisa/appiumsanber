import mobile_automation from '../pageobjects/diet.meal.page'

describe('Open Application',() => {
    it('should open apps', async() => {
        await ($('welcome')).click();
        await $('inputname').setValue("inputName");
        await $('inputweight').setValue("inputWeight");
        await $('inputheight').setValue("inputHeight");
        await $('btnSubmit"]').click();
        await $('selectGender').click();
        await $('selectOneActivity').click();
        await $('btnFinish"]').click();
        await driver.pause(3000);
    })
    it('should open apps with empty data', async() => {
        await ($('welcome')).click();
        await $('inputname').setValue("inputName");
        await $('inputweight').setValue("inputWeight");
        await $('inputheight').setValue("inputHeight");
        await $('btnSubmit').click();
        await $('errorEmpty').click();
        await driver.pause(3000);
    })
})