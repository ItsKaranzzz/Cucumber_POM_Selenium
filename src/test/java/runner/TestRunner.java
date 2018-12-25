package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/java/newtours/qa/testFeatures", glue = { "newtours\\qa\\testSteps" }, format = {
		"pretty", "html:test-output",
		"json:test-output/cucumber.json" }, monochrome = true, strict = true, dryRun = false)
public class TestRunner {

}
