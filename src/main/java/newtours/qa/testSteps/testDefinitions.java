package newtours.qa.testSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import newtours.qa.pages.HomePage;
import newtours.qa.testBase.TestBase;

public class testDefinitions extends TestBase {

	HomePage oHome;

	@Given("^User has launched the application$")
	public void user_has_launched_the_application() {

		initialize();

	}

	@Then("^User clicks on the Register link$")
	public void user_clicks_on_the_Register_link() {

		oHome = new HomePage(driver);
		oHome.clickOnregister();

	}

	@Then("^User enter the contact details \\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"\\\"([^\\\"]*)\\\"$")
	public void user_enter_the_contact_details(String frstName, String lstname, String Phone, String eml, String add,
			String cty, String st, String zip, String contry, String uname, String passsword) {

		oHome = new HomePage(driver);
		oHome.enterContactDetails(frstName, lstname, Phone, eml, add, cty, st, zip, contry, uname, passsword);
	}

	@Then("^User validate the completion of the registration$")
	public void user_validate_the_completion_of_the_registration() {
		oHome.verifytheSubmission();
	}

	@Then("^User Closes the Browser$")
	public void user_Closes_the_Browser() {
		teardown();
	}
}
