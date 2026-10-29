
import { test, expect } from "./fixtures";

import testData2 from "../testData/newvisitor.json";
import testData3 from "../testData/existingvisitor.json";
import testData5 from "../testData/datepicker.json";
import testdata6 from "../testData/daterangevalidation.json";
import testData8 from "../testData/adminprofile.json";
import testData9 from "../testData/updateadmindetails.json";




test.describe("Company Visitors Management System", () => {

    // TC1: Verify login
    test("TC1_Verify Login", async ({ logedin }) => {
        // await expect(logedin).toHaveURL(/./);
        await expect(logedin).toHaveURL(/dashboard/i);
    });

    // TC2: Verify New Visitor
    test("TC2_Verify New Visitor", async ({ logedin, visitorpage }) => {
        await visitorpage.vilink.click();
        await visitorpage.fullname.fill(testData2.name);
        await visitorpage.emailinput.fill(testData2.email);
        await visitorpage.phonenumber.fill(testData2.phNo);
        await visitorpage.address.fill(testData2.addressinput);
        await visitorpage.whoomtomeet.fill(testData2.wtm);
        await visitorpage.department.fill(testData2.dep);
        await visitorpage.reasontomeet.fill(testData2.rtm);
        await visitorpage.submitbutton.click();
    });

    // TC3: Search for an existing visitor
    test("TC3_Search for an existing visitor", async ({ logedin, existvisitor }) => {
        await existvisitor.searchdatafield.fill(testData3.fname);
        await existvisitor.searchbutton.click();
    });

    // TC4: Update Outing Remark
    test("TC4_Update Outing Remark", async ({ logedin, existvisitor }) => {
        await existvisitor.searchdatafield.fill(testData3.fname);
        await existvisitor.searchbutton.click();
        await existvisitor.editbutton.click();
        await existvisitor.outingremark.fill(testData3.remark);
        await existvisitor.updatebutton.click();
    });

    // TC5: Verify visitor records
  test("TC5_Verify visitor records in Manage Visitors", async ({ logedin, managevisitor }) => {
    // Open Manage Visitors page
    await managevisitor.managevisitorlink.click();

    // Wait until visitor records are visible
    await expect(managevisitor.rows.first()).toBeVisible({
        timeout: 10000
    });
    // Get all visitor records
    const records = await managevisitor.rows.allInnerTexts();
    console.log("Visitor Records:", records);
    // Verify that records are available
    expect(records.length).toBeGreaterThan(0);
});

   

    // TC6: Datepicker functionality
    test("TC6_Datepicker functionality", async ({ logedin, datep }) => {
        await datep.visitorbwdatelink.click();
        await datep.fromdate.fill(testData5.fdate);
        await datep.todate.fill(testData5.tdate);
        await datep.submitbutton.click();
    });

    // TC7: Verify date range validation
    test("TC7_Verify date range validation", async ({ logedin, dateset }) => {
        await dateset.vibwdatelinnk.click();
        await dateset.fromdateTF.fill(testdata6.fdate);
        await dateset.todateTF.fill(testdata6.tdate);
        await dateset.submit.click();
    });

    // TC8: Verify Admin Profile details
  
test("TC8_Verify Admin Profile details", async ({ logedin, adminp }) => {

    await adminp.adminuser.click();
    await adminp.adminprofile.click();

    await expect(adminp.adminname).toBeVisible({
        timeout: 10000
    });

    await expect(adminp.adminname).toHaveValue(testData8.adminname);
    await expect(adminp.emailinput).toHaveValue(testData8.email);
    await expect(adminp.phonenumber).toHaveValue(testData8.phNo);
    await expect(adminp.username).toHaveValue(testData8.uname);

    console.log("Admin name:", await adminp.adminname.inputValue());
    console.log("Email:", await adminp.emailinput.inputValue());
    console.log("Phone:", await adminp.phonenumber.inputValue());
    console.log("Username:", await adminp.username.inputValue());
});


    // TC9: Update Admin Profile details
    test("TC9_Verify updating Admin Profile details", async ({ logedin, admindetails }) => {
        await admindetails.adminuser.click();
        await admindetails.adminprofile.click();

        await admindetails.adminname.fill(testData9.adminname);
        await admindetails.emailinput.fill(testData9.email);
        await admindetails.phonenumber.fill(testData9.phNo);

        await expect(admindetails.username).toHaveValue(testData9.uname);
        await admindetails.update.click();

    });

    test("TC10_Verify Today's Visitors count",async({ logedin,todayvisitorcount })=>{
        await expect(todayvisitorcount.tvcount).toBeVisible()
        let count=await todayvisitorcount.tvcount.innerText();
        console.log("Today's Visitors Count", count);

    });

    test("TC11_Verify Yesterday's Visitors count",async({logedin,yrstdyvcount})=>{
        await expect(yrstdyvcount.yvcount).toBeVisible()
        let count=await yrstdyvcount.yvcount.innerText()
        console.log("Yesterday's Visitors Count",count)

    });

    test("TC12_Last 7 Days Visitors",async({logedin,lastsevenvisitor})=>{
        await expect(lastsevenvisitor.lsdvisitor).toBeVisible()
        let count=await lastsevenvisitor.lsdvisitor.innerText()
        console.log("Last 7 Days Visitors",count);

        
        await lastsevenvisitor.visitorbwdatelink.click();
        await lastsevenvisitor.fromdate.fill(testData5.fdate);
        await lastsevenvisitor.todate.fill(testData5.tdate);
        await lastsevenvisitor.submitbutton.click();


        
    })

    test.only("TC13_total visitors till date",async({logedin,totalcount})=>{
        await expect(totalcount.tcount).toBeVisible()
        let count=await totalcount.tcount.innerText()
        console.log("total visitors till date",count);
        

    })


    // TC10: Logout functionality
    test("TC13_Logout functionality", async ({ logedin, logout }) => {
        await logout.user.click();
        await logout.logoutbutton.click();

        await expect(logout.logoutbutton).not.toBeVisible();
    });

});











