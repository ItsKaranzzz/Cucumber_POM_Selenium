Feature: Validate the User registration in Application 

Scenario Outline: 
	Validate the new user registration

	Given User has launched the application 
	Then User clicks on the Register link 
	Then User enter the contact details "<FirstName>""<LastName>""<Phone>""<Email>""<Address>""<City>""<State>""<PostalCode>""<Country>""<username>""<password>" 
	Then User validate the completion of the registration 
	Then User Closes the Browser 

	Examples: 
		| FirstName | LastName | Phone | Email | Address | City | State | PostalCode | Country | username | password |
		|Jack|Reynolds|123242342|JR@tere.com|Test123|TestC|TestS|h32444|AUSTRALIA|jack_123|welcome321|
		|Frank|Martin|2423423345|fram@transporter.com|test22|Ci|ST|g4234|CANADA|frank_123|martin123|