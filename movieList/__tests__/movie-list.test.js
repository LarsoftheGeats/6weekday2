let {Builder, Capabilities} = require ('selenium-webdriver')


require('chromedriver')

let driver = new Builder().withCapabilities(Capabilities.chrome()).build()

let {addMovie, deleteMovie, crossOffMovie} = require('../functions/function.js')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    driver.quit()
})

test('add movie', async () => {
    await addMovie(driver)
})

test('cross off movies', async() => {
    await crossOffMovie(driver)
})

test('delete movie', async() => {
    await deleteMovie(driver)
})

