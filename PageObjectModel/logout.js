class logoutpage{
    constructor(page){
        this.user=page.locator('//a[@class="js-acc-btn"]')
        this.logoutbutton=page.locator('//a[@href="logout.php"]')

    }
}
export default logoutpage