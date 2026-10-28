class loginpage{
    constructor(page){
        
        this.usernameTextField=page.locator('//input[@name="username"]')
        this.passwordTextField=page.locator('//input[@name="password"]')
        this.signinbutton=page.locator('//button[@class="au-btn au-btn--block au-btn--green m-b-20"]')
    }
}
export default loginpage