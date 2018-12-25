package newtours.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import newtours.qa.pageBase.PageBase;

public class HomePage extends PageBase {

	@FindBy(linkText = "REGISTER")
	private WebElement registerLink;

	@FindBy(name = "firstName")
	private WebElement firstname;
	@FindBy(name = "lastName")
	private WebElement lastname;
	@FindBy(name = "phone")
	private WebElement phone;
	@FindBy(name = "userName")
	private WebElement email;

	@FindBy(name = "address1")
	private WebElement address1;
	@FindBy(name = "city")
	private WebElement city;
	@FindBy(name = "state")
	private WebElement state;
	@FindBy(name = "country")
	private WebElement country;
	@FindBy(name = "postalCode")
	private WebElement zipCode;
	@FindBy(name = "email")
	private WebElement username;
	@FindBy(name = "password")
	private WebElement passowrd;
	@FindBy(name = "confirmPassword")
	private WebElement confirmpassowrd;
	@FindBy(name = "register")
	private WebElement submitContactInfo;

	@FindBy(xpath = "//font[contains(text(),'Thank you')]")
	private WebElement postSubmitmessage;

	@FindBy(linkText = "CONTACT")
	private WebElement contactButton;

	public void clickOnregister() {

		PageBase.clickOnElement(registerLink);
	}

	public void enterContactDetails(String frstName, String lstname, String Phone, String eml, String add, String cty,
			String st, String zip, String contry, String uname, String passsword) {

		PageBase.enterOntoElement(firstname, frstName);
		PageBase.enterOntoElement(lastname, lstname);
		PageBase.enterOntoElement(phone, Phone);
		PageBase.enterOntoElement(email, eml);
		PageBase.enterOntoElement(address1, add);
		PageBase.enterOntoElement(city, cty);
		PageBase.enterOntoElement(state, st);
		PageBase.enterOntoElement(zipCode, zip);
		PageBase.selectElementOnDropdown(country, contry);
		PageBase.enterOntoElement(username, uname);
		PageBase.enterOntoElement(passowrd, passsword);
		PageBase.enterOntoElement(confirmpassowrd, passsword);
		PageBase.clickOnElement(submitContactInfo);
	}

	public boolean verifytheSubmission() {
		System.out.println(postSubmitmessage.getText());
		return PageBase.elementDisplayVerification(postSubmitmessage);
	}

	public ContactPage clickOnContacts() {
		clickOnElement(contactButton);
		return new ContactPage(driver);
	}

	public HomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

}
