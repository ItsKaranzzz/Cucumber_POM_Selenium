$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactPage.feature");
formatter.feature({
  "line": 1,
  "name": "Testing COntact Module",
  "description": "",
  "id": "testing-contact-module",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the contacts link on HomePage",
  "description": "",
  "id": "testing-contact-module;validate-the-contacts-link-on-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on HomPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on ContactLinks",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify the ContactPage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Return to Hompage By clicking on it",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageSteps.user_on_HomPage()"
});
formatter.result({
  "duration": 12049075124,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageSteps.click_on_ContactLinks()"
});
formatter.result({
  "duration": 3023654294,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageSteps.verify_the_ContactPage()"
});
formatter.result({
  "duration": 79518456,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageSteps.return_to_Hompage_By_clicking_on_it()"
});
formatter.result({
  "duration": 881362905,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the User registration in Application",
  "description": "",
  "id": "validate-the-user-registration-in-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "Validate the new user registration",
  "id": "validate-the-user-registration-in-application;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User has launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the Register link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter the contact details \"\u003cFirstName\u003e\"\"\u003cLastName\u003e\"\"\u003cPhone\u003e\"\"\u003cEmail\u003e\"\"\u003cAddress\u003e\"\"\u003cCity\u003e\"\"\u003cState\u003e\"\"\u003cPostalCode\u003e\"\"\u003cCountry\u003e\"\"\u003cusername\u003e\"\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User validate the completion of the registration",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Closes the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validate-the-user-registration-in-application;;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Phone",
        "Email",
        "Address",
        "City",
        "State",
        "PostalCode",
        "Country",
        "username",
        "password"
      ],
      "line": 13,
      "id": "validate-the-user-registration-in-application;;;1"
    },
    {
      "cells": [
        "Jack",
        "Reynolds",
        "123242342",
        "JR@tere.com",
        "Test123",
        "TestC",
        "TestS",
        "h32444",
        "AUSTRALIA",
        "jack_123",
        "welcome321"
      ],
      "line": 14,
      "id": "validate-the-user-registration-in-application;;;2"
    },
    {
      "cells": [
        "Frank",
        "Martin",
        "2423423345",
        "fram@transporter.com",
        "test22",
        "Ci",
        "ST",
        "g4234",
        "CANADA",
        "frank_123",
        "martin123"
      ],
      "line": 15,
      "id": "validate-the-user-registration-in-application;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "Validate the new user registration",
  "id": "validate-the-user-registration-in-application;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User has launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the Register link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter the contact details \"Jack\"\"Reynolds\"\"123242342\"\"JR@tere.com\"\"Test123\"\"TestC\"\"TestS\"\"h32444\"\"AUSTRALIA\"\"jack_123\"\"welcome321\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User validate the completion of the registration",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Closes the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "testDefinitions.user_has_launched_the_application()"
});
formatter.result({
  "duration": 8216877573,
  "status": "passed"
});
formatter.match({
  "location": "testDefinitions.user_clicks_on_the_Register_link()"
});
formatter.result({
  "duration": 1256885254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jack",
      "offset": 32
    },
    {
      "val": "Reynolds",
      "offset": 38
    },
    {
      "val": "123242342",
      "offset": 48
    },
    {
      "val": "JR@tere.com",
      "offset": 59
    },
    {
      "val": "Test123",
      "offset": 72
    },
    {
      "val": "TestC",
      "offset": 81
    },
    {
      "val": "TestS",
      "offset": 88
    },
    {
      "val": "h32444",
      "offset": 95
    },
    {
      "val": "AUSTRALIA",
      "offset": 103
    },
    {
      "val": "jack_123",
      "offset": 114
    },
    {
      "val": "welcome321",
      "offset": 124
    }
  ],
  "location": "testDefinitions.user_enter_the_contact_details(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8973290297,
  "status": "passed"
});
formatter.match({
  "location": "testDefinitions.user_validate_the_completion_of_the_registration()"
});
formatter.result({
  "duration": 833820403,
  "status": "passed"
});
formatter.match({
  "location": "testDefinitions.user_Closes_the_Browser()"
});
formatter.result({
  "duration": 1486962877,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "Validate the new user registration",
  "id": "validate-the-user-registration-in-application;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User has launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the Register link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter the contact details \"Frank\"\"Martin\"\"2423423345\"\"fram@transporter.com\"\"test22\"\"Ci\"\"ST\"\"g4234\"\"CANADA\"\"frank_123\"\"martin123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User validate the completion of the registration",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Closes the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "testDefinitions.user_has_launched_the_application()"
});
formatter.result({
  "duration": 10818172605,
  "status": "passed"
});
formatter.match({
  "location": "testDefinitions.user_clicks_on_the_Register_link()"
});
formatter.result({
  "duration": 7808815656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Frank",
      "offset": 32
    },
    {
      "val": "Martin",
      "offset": 39
    },
    {
      "val": "2423423345",
      "offset": 47
    },
    {
      "val": "fram@transporter.com",
      "offset": 59
    },
    {
      "val": "test22",
      "offset": 81
    },
    {
      "val": "Ci",
      "offset": 89
    },
    {
      "val": "ST",
      "offset": 93
    },
    {
      "val": "g4234",
      "offset": 97
    },
    {
      "val": "CANADA",
      "offset": 104
    },
    {
      "val": "frank_123",
      "offset": 112
    },
    {
      "val": "martin123",
      "offset": 123
    }
  ],
  "location": "testDefinitions.user_enter_the_contact_details(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 7703634760,
  "status": "passed"
});
formatter.match({
  "location": "testDefinitions.user_validate_the_completion_of_the_registration()"
});
formatter.result({
  "duration": 151596168,
  "status": "passed"
});
formatter.match({
  "location": "testDefinitions.user_Closes_the_Browser()"
});
formatter.result({
  "duration": 794930972,
  "status": "passed"
});
});