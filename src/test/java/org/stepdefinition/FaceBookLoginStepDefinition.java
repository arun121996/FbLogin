package org.stepdefinition;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.utilities.BaseClass;
import org.utilities.FaceBookPojo;

import io.cucumber.java.en.*;

public class FaceBookLoginStepDefinition extends BaseClass {
	@Given(": The user should launch the chrome browser")
	public void the_user_should_launch_the_chrome_browser() {
		
	}

	@When(": The user should type the url")
	public void the_user_should_type_the_url() {
		
	   	}

	   
	@When(": The user should maximaze the window")
	public void the_user_should_maximaze_the_window() {
	
	}

	@When(": The user should type the invalid username and valid password")
	public void the_user_should_type_the_invalid_username_and_valid_password() throws IOException {
		 FaceBookPojo f = new FaceBookPojo();
		
	  
	}

	@When(": The user should click the login button")
	public void the_user_should_click_the_login_button() throws InterruptedException {
	    FaceBookPojo f = new FaceBookPojo();
	    btnclick(f.getTxtlogin());
	    Thread.sleep(2000);
	    
	   
	}
	@Then(": The user should naviage to incorrect credential page")
	public void the_user_should_naviage_to_incorrect_credential_page() throws InterruptedException {
	  
	   String currentUrl = driver.getCurrentUrl();
	   Assert.assertTrue("verify the page", currentUrl.contains("privacy")); 
	    System.out.println("verify the page");
	    Thread.sleep(2000);
	  
	    
	  
	   
	}
	
	@When(": The user should type the invalid username {string} and invalid password {string}")
	public void the_user_should_type_the_invalid_username_and_invalid_password(String s1, String s2) {
	   FaceBookPojo f = new FaceBookPojo();
	   fill(f.getTxtuser(), s1);
	   fill(f.getTxtpass(), s2);
	   
	}
	
	@When(": The user should type the invalid username and valid passwords")
	public void the_user_should_type_the_invalid_username_and_valid_passwords(io.cucumber.datatable.DataTable d ) throws InterruptedException {
		
		List<Map<String, String>> mp = d.asMaps();
		 FaceBookPojo f = new FaceBookPojo();
		 fill(f.getTxtuser(),mp.get(0).get("ram"));
		 fill(f.getTxtpass(), mp.get(2).get("pass"));
		 
	}


	
}
