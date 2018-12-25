package newtours.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import newtours.qa.pageBase.PageBase;

public class ContactPage extends PageBase {

	@FindBy(xpath = "//a[@href='mercurywelcome.php']/ancestor::td[contains(@align,'CENTER')]")
	private WebElement backtoHome;

	@FindBy(xpath = "//font[starts-with(text(),'Sorry')]")
	private WebElement textContacts;

	public void clickOnHome() {
		clickOnElement(backtoHome);

	}

	public void validateForCOntactPage() {
		elementDisplayVerification(textContacts);
	}

	public ContactPage(WebDriver driver) {
		PageFactory.initElements(driver, this);

	}
}
