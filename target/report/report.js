$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFile/FacebookForget.feature");
formatter.feature({
  "name": "To validate forget password feature in facebook page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify forget password functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": ": The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should maximaze the window",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_maximaze_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should click in forgetpassword link",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookForgetPasswordStepDefinition.the_user_should_click_in_forgetpassword_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should navigate to current page",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookForgetPasswordStepDefinition.the_user_should_navigate_to_current_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should be enter valid mobilenumber or password",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookForgetPasswordStepDefinition.the_user_should_be_enter_valid_mobilenumber_or_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should be click button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookForgetPasswordStepDefinition.the_user_should_be_click_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should navigate to reset password page",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookForgetPasswordStepDefinition.the_user_should_navigate_to_reset_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFile/FaceboolLogin.feature");
formatter.feature({
  "name": "To validate login functionlity of facebook",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": ": The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should maximaze the window",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_maximaze_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate with invalid username and valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": ": The user should type the invalid username and valid passwords",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "storage",
        "ram"
      ]
    },
    {
      "cells": [
        "dhoni",
        "dhoni@123",
        "jeeva",
        "jeeva@123"
      ]
    },
    {
      "cells": [
        "arun",
        "arun@123",
        "ajith",
        "ajith@123"
      ]
    },
    {
      "cells": [
        "kholi",
        "kholi@123",
        "raina",
        "raina@123"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_invalid_username_and_valid_passwords(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should naviage to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_naviage_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": The user should type the invalid username \"\u003cuser\u003e\" and invalid password \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": ": The user should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": ": The user should naviage to incorrect credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ]
    },
    {
      "cells": [
        "arun",
        "arun@1996"
      ]
    },
    {
      "cells": [
        "ajith",
        "ajith@123"
      ]
    },
    {
      "cells": [
        "dhoni",
        "dhoni@123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": ": The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should maximaze the window",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_maximaze_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": The user should type the invalid username \"arun\" and invalid password \"arun@1996\"",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_invalid_username_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should naviage to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_naviage_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": ": The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should maximaze the window",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_maximaze_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": The user should type the invalid username \"ajith\" and invalid password \"ajith@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_invalid_username_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should naviage to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_naviage_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": ": The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should type the url",
  "keyword": "When "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should maximaze the window",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_maximaze_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": The user should type the invalid username \"dhoni\" and invalid password \"dhoni@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_type_the_invalid_username_and_invalid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": ": The user should naviage to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "FaceBookLoginStepDefinition.the_user_should_naviage_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});