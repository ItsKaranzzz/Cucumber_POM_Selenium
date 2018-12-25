package newtours.qa.pageBase;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import newtours.qa.testBase.TestBase;

public class PageBase extends TestBase {

	public static void clickOnElement(WebElement webelement) {

		try {

			// oWait.until(ExpectedConditions.elementToBeClickable(webelement));
			webelement.click();
		} catch (Throwable throwable) {
			System.out.println(throwable + "  " + webelement.getClass() + " " + webelement.getText());
		}
	}

	public static void enterOntoElement(WebElement webelement, String textVal) {

		try {

			// oWait.until(ExpectedConditions.visibilityOf(webelement));
			webelement.clear();
			webelement.sendKeys(textVal);
		} catch (Throwable throwable) {
			System.out.println(throwable + "  " + webelement.getClass() + " " + webelement.getText());
		}
	}

	public static void selectElementOnDropdown(WebElement webelement, String dropDownValue) {
		try {

			// oWait.until(ExpectedConditions.elementToBeClickable(webelement));
			Select select = new Select(webelement);
			select.selectByVisibleText(dropDownValue);
		} catch (Throwable throwable) {
			System.out.println(throwable + "  " + webelement.getClass() + " " + webelement.getText());
		}
	}

	public static boolean elementDisplayVerification(WebElement element) {
		return element.isDisplayed();

	}

	public PageBase() {
		oWait = new WebDriverWait(driver, 20);

	}
}
