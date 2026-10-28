

import { test as base, expect } from "@playwright/test";
import "dotenv/config";

import loginpage from "../PageObjectModel/loginpage";
import Visitor from "../PageObjectModel/newvisitor";
import existing from "../PageObjectModel/existingvisitor";
import visitorrecord from "../PageObjectModel/mnvisitorrecord";
import datepicker from "../PageObjectModel/datepicker";
import daterange from "../PageObjectModel/daterangevalidation";
import adminprofile from "../PageObjectModel/adminprofile";
import updateadmin from "../PageObjectModel/udateadmindetails";
import logoutpage from "../PageObjectModel/logout";
import todayvcount from "../PageObjectModel/todaysvisitorcount";
import yesterdayvcount from "../PageObjectModel/yesterdayvisitorcount";
import lastsevendvisitor from "../PageObjectModel/last7daysvsitor";

export const test = base.extend({

    // Open CVMS and log in
    logedin: async ({ page }, use) => {
       
        await page.goto("/");

        const [page2] = await Promise.all([
            page.waitForEvent("popup"),
            page.getByRole("link", {
                name: "Company Visitors Management System"
            }).click()
        ]);

        await page2.waitForLoadState();

        const login = new loginpage(page2);

        await login.usernameTextField.fill(process.env.USERNAME);
        await login.passwordTextField.fill(process.env.PASSWORD);
        await login.signinbutton.click();

        // Wait for the login navigation to finish
        await page2.waitForLoadState("domcontentloaded");

        // Pass the logged-in popup page to other fixtures
        await use(page2);
    },

    // Page Object Model fixtures
    visitorpage: async ({ logedin }, use) => {
        await use(new Visitor(logedin));
    },

    existvisitor: async ({ logedin }, use) => {
        await use(new existing(logedin));
    },

    managevisitor: async ({ logedin }, use) => {
        await use(new visitorrecord(logedin));
    },

    datep: async ({ logedin }, use) => {
        await use(new datepicker(logedin));
    },

    dateset: async ({ logedin }, use) => {
        await use(new daterange(logedin));
    },

    adminp: async ({ logedin }, use) => {
        await use(new adminprofile(logedin));
    },

    admindetails: async ({ logedin }, use) => {
        await use(new updateadmin(logedin ));
    },

    todayvisitorcount:async({logedin},use)=>{
        await use(new todayvcount(logedin));
    },

    yrstdyvcount:async({logedin},use)=>{
        await use(new  yesterdayvcount(logedin));
    },

    lastsevenvisitor:async({logedin},use)=>{
        await use(new lastsevendvisitor(logedin));
    },

    logout: async ({ logedin }, use) => {
        await use(new logoutpage(logedin));
    }
});

export { expect };



