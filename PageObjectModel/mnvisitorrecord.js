class visitorrecord{
    constructor(page){
        this.managevisitorlink =page.locator('//a[@href="manage-newvisitors.php"]')
        this.rows=page.locator('//table[@class="table table-borderless table-striped table-earning"]')
        
    }

}
export default visitorrecord