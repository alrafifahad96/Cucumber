$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/alrafifahd96gmail.com/Desktop/eBay/eBayCucumber/src/test/java/feature/Register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Feature",
  "description": "",
  "id": "register-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Register Feature test",
  "description": "",
  "id": "register-feature;register-feature-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user in the register page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "put first name",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "put last name",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "provide email address",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "give  password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click create account button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_in_the_register_page()"
});
formatter.result({
  "duration": 5502019080,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_first_name()"
});
formatter.result({
  "duration": 692482349,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_last_name()"
});
formatter.result({
  "duration": 93613582,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.provide_email_address()"
});
formatter.result({
  "duration": 186124866,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.give_password()"
});
formatter.result({
  "duration": 110255768,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.click_create_account_button()"
});
formatter.result({
  "duration": 30096582075,
  "status": "passed"
});
});