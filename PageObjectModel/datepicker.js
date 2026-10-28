class datepicker{
    constructor(page){
        this.visitorbwdatelink=page.locator('//a[@href="bwdates-reports.php"]')
        this.fromdate=page.locator('#fromdate')
        this.todate=page.locator('#todate')
        this.submitbutton=page.locator('#submit')

    }
}
export default datepicker