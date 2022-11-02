// import BY

const {By} = require("selenium-webdriver")

//The function

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Batman')
    //select add button
    await driver.findElement(By.xpath('//button')).click()
    await new Promise(r => setTimeout(r, 2000));
}

const crossOffMovie = async (driver) => {



    await driver.findElement(By.xpath('//li')).click()
    
    const movieMessage = await driver.findElement(By.id('message'))
    let displayed = movieMessage.isDisplayed()
    expect (displayed).toBeTruthy()
}

const unCrossMovie = async (driver) => {
    await driver.findElement(By.xpath('//li')).click()
    const crossedOff = driver.findElement(By.)

}

const deleteMovie = async (driver) => {
    // get the delete button
    // push the button
    
    await driver.findElement(By.id('Batman')).click()
    // verify the text is gone from the html
    const movieMessage = await driver.findElement(By.id('message'))
    let displayed = movieMessage.isDisplayed()
    expect (displayed).toBeTruthy()

}



module.exports = {
    addMovie,
    deleteMovie,
    crossOffMovie,
    unCrossMovie
}