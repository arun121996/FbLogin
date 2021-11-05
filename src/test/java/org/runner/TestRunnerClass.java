package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utilities.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources" , glue="org.stepdefinition" , dryRun=false ,monochrome=true,strict=false,
snippets=SnippetType.CAMELCASE,plugin={"html:target\\report",
		"junit:target\\report\\fb.xml",
		"json:target\\report\\fblogin.json"})
public class TestRunnerClass {
	
	
	@AfterClass
	public static void report() {
		JvmReport.generatejvmreport(System.getProperty("user.dir")+"\\target\\report\\fblogin.json");

	}
	
}
