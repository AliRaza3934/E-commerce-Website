@Login @Regression
Feature: User Login Page.

Background: User visits website
  Given User visits the website


Scenario: User is able to login
  When User enters "<USERNAME>" and "<PASSWORD>"
  Then User is logged in with "<USERNAME>"

Examples:
  | USERNAME                 | PASSWORD   |
  | arqureshi.3934@gmail.com | Automation |


Scenario: User is NOT able to login
  When User enters "<USERNAME>" and "<PASSWORD>"
  Then User is not logged in

Examples:
  | USERNAME         | PASSWORD | 
  | xyz123@yahoo.com | wrongPassword | 
