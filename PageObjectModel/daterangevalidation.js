class daterange{
    constructor(page){
        this.vibwdatelinnk=page.locator('//a[@href="bwdates-reports.php"]')
        this.fromdateTF=page.locator('#fromdate')
        this.todateTF=page.locator('#todate')
        this.submit=page.locator('#submit')
    }
}
export default daterange