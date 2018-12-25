package newtours.qa.testBase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TestBase {

	public static WebDriver driver;
	public static WebDriverWait oWait;
	public static Properties oProp;

	public TestBase() {

		try {
			FileInputStream propReader = new FileInputStream(
					System.getProperty("user.dir") + "/src/main/java/newtours/qa/config/config.properties");
			oProp = new Properties();
			try {
				oProp.load(propReader);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch blockFS
			e.printStackTrace();
		}

	}

	public void initialize() {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();

		browserSettings();
	}

	public void browserSettings() {
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.navigate().to(oProp.getProperty("url"));
	}

	public void teardown() {
		driver.quit();

	}
}
