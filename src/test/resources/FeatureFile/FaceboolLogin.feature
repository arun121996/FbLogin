
Feature: To validate login functionlity of facebook
Background:
Given : The user should launch the chrome browser
When : The user should type the url
And : The user should maximaze the window

Scenario: Validate with invalid username and valid password
And : The user should type the invalid username and valid passwords
	            
              |user|pass|storage|ram|
              |dhoni|dhoni@123|jeeva|jeeva@123|
              |arun|arun@123|ajith|ajith@123|
              |kholi|kholi@123|raina|raina@123|
And : The user should click the login button
Then : The user should naviage to incorrect credential page


Scenario Outline: Validate with invalid username and invalid password
And : The user should type the invalid username "<user>" and invalid password "<pass>"
And : The user should click the login button
Then : The user should naviage to incorrect credential page

Examples:
|user|pass|
|arun|arun@1996|
|ajith|ajith@123|
|dhoni|dhoni@123|

