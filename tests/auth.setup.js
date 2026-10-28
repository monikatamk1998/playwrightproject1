import { test as setup, expect } from "@playwright/test";
import loginpage from "../PageObjectModel/loginpage";
import dotenv from "dotenv"

dotenv.config(dotenv.config({
    path: 'C:/Users/Akhilesh/Desktop/ProjectTK1/.env',
    override: true
}))


setup("Login and save storage state", async ({page}) => {

     await page.goto(process.env.baseURL)
     
  
      const login = new loginpage(page);

    await login.usernameTextField.fill(process.env.USERNAME);
    await login.passwordTextField.fill(process.env.PASSWORD);
    await login.signinbutton.click();

    //  await expect(page).toHaveURL(/dashboard/i,{timeout: 15000,});


    await page.context().storageState({
     path: "playwright/.auth/user.json",
    
    });

});

