package org.stepdefinition;


import java.io.IOException;
import java.util.Date;

import org.utilities.BaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends BaseClass{
	
	@Before(order=1)
	public void startscenario() {
		System.out.println("startsscenario");
		launchchrome();
		loadurl("https://www.facebook.com/");
		winmax();
	}
	
	@After(order=1)
	public void endscenario() {
		closewindow();
	}
	@Before(order=2)
	public void starttime() {
		Date d =new Date();
		System.out.println(d);
	}
	@After(order=2)
	public void endtime() {
		Date d = new Date();
		System.out.println(d);
	}
	@Before(order=3)
	public void success() {
		System.out.println("sucess");
	}
	@After(order=3)
	public void sucess(Scenario s) throws IOException {
		String name = s.getName();
		String filename = name.replace(" ", "_");
		screenshot1(filename);
	}
}
