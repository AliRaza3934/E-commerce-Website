@userProfile @Regression
Feature: User Profile.

 Background: User visits website
  Given User visits the website
  When User enters "arqureshi.3934@gmail.com" and "Automation"
  
Scenario: Users is  able to update their profile information and view order history.
  Then User is able to click on dropdown toggle