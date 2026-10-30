class existing{
    constructor(page){
        this.searchdatafield=page.locator('#searchdata')
        this.searchbutton=page.locator('//button[@class="au-btn--submit"]')
        this.editbutton=page.locator('(//i[@class="fa fa-edit fa-1x"])[22]')
        this.outingremark=page.locator('//textarea[@class="form-control wd-450"]')
        this.updatebutton=page.locator('//button[text()="Update"]')
    }
}
export default existing