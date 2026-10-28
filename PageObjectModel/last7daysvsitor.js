class lastsevendvisitor{
    constructor(page){
        this.lsdvisitor=page.locator('//div[@class="overview-item overview-item--c3"]')
         this.visitorbwdatelink=page.locator('//a[@href="bwdates-reports.php"]')
        this.fromdate=page.locator('#fromdate')
        this.todate=page.locator('#todate')
        this.submitbutton=page.locator('#submit')
    }

}
export default lastsevendvisitor