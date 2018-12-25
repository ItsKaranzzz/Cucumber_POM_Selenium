$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
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
  "name": "User enter the contact details \"\u003cFirstName\u003e\"\"\u003cLastName\u003e\"\"\u003cPhone\u003e\"\"\u003cEmail\u003e\"\"\u003cAddress\"\"\u003cCity\u003e\"\"\u003cState\u003e\"\"\u003cPostalCode\u003e\"\"\u003cCountry\u003e\"\"\u003cusername\u003e\"\"\u003cpassword\u003e\"",
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
  "name": "User enter the contact details \"Jack\"\"Reynolds\"\"123242342\"\"JR@tere.com\"\"\u003cAddress\"\"TestC\"\"TestS\"\"h32444\"\"AUSTRALIA\"\"jack_123\"\"welcome321\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "User enter the contact details \"Frank\"\"Martin\"\"2423423345\"\"fram@transporter.com\"\"\u003cAddress\"\"Ci\"\"ST\"\"g4234\"\"CANADA\"\"frank_123\"\"martin123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});