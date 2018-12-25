package newtours.qa.testSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import newtours.qa.pages.ContactPage;
import newtours.qa.pages.HomePage;
import newtours.qa.testBase.TestBase;

public class ContactsPageSteps extends TestBase {
	ContactPage oContactPage;

	@Given("^User on HomPage$")
	public void user_on_HomPage() {
		initialize();
	}

	@Then("^Click on ContactLinks$")
	public void click_on_ContactLinks() {
		HomePage oHomePage = new HomePage(driver);
		oContactPage = oHomePage.clickOnContacts();

	}

	@Then("^Verify the ContactPage$")
	public void verify_the_ContactPage() {
		oContactPage = new ContactPage(driver);
		oContactPage.validateForCOntactPage();
	}

	@Then("^Return to Hompage By clicking on it$")
	public void return_to_Hompage_By_clicking_on_it() {
		oContactPage.clickOnHome();
	}
}
