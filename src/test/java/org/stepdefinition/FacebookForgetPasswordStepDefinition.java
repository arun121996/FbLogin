package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.utilities.BaseClass;

import io.cucumber.java.en.*;

public class FacebookForgetPasswordStepDefinition extends BaseClass{
	@Given(": The user should browser launch")
	public void the_user_should_browser_launch() {
		
	}
	@When(": The user should the load url")
	public void the_user_should_the_load_url() {
	
	}
	@When(": The user should browser maximaze")
	public void the_user_should_browser_maximaze() {
		
	}

	@When(": The user should click in forgetpassword link")
	public void the_user_should_click_in_forgetpassword_link() {
	    WebElement clk = driver.findElement(By.xpath("//a[text()='Forgotten password?']"));
	    clk.click();
	}

	@When(": The user should navigate to current page")
	public void the_user_should_navigate_to_current_page() {
		String url = driver.getCurrentUrl();
		Assert.assertTrue("verifythepage", url.contains("identify") );
		System.out.println("done");
	   
	}

	@When(": The user should be enter valid mobilenumber or password")
	public void the_user_should_be_enter_valid_mobilenumber_or_password() {
		driver.findElement(By.xpath("//input[@id='identify_email']")).sendKeys("1234567890");
	    
	}

	@When(": The user should be click button")
	public void the_user_should_be_click_button() throws InterruptedException {
	   driver.findElement(By.xpath("//button[@id='did_submit']")).click();
	   Thread.sleep(2000);
	}

	@Then(": The user should navigate to reset password page")
	public void the_user_should_navigate_to_reset_password_page() throws InterruptedException {
		String url = driver.getCurrentUrl();
		Assert.assertTrue("verify the page", url.contains("recover"));
		System.out.println("done");
		
		Thread.sleep(2000);
		 
	}

}
