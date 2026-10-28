class Visitor{
    constructor(page){
       this.vilink=page.locator('//a[@href="visitors-form.php"]')
       this.fullname=page.locator('#fullname')
       this.emailinput=page.locator('#email')
       this.phonenumber=page.locator('#mobilenumber')
       this.address=page.locator('#address')
       this.whoomtomeet=page.locator('#whomtomeet')
       this.department=page.locator('#department')
       this.reasontomeet=page.locator('#reasontomeet')
       this.submitbutton=page.locator('#submit')

    }
}
export default Visitor