class adminprofile{
    constructor(page){
        this.adminuser=page.locator('//a[@class="js-acc-btn"]')
        this.adminprofile=page.locator('//a[@href="admin-profile.php"]')
        this.adminname=page.locator('#adminname')
        this.emailinput=page.locator('#email')
        this.phonenumber=page.locator('#mobilenumber')
        this.username=page.locator('#username')
        this.adminregdate=page.locator('#adminregdate')


    }
}
export default adminprofile