@cartOperation @Regression

Feature: Cart Details

 Background: User visits website
  Given User visits the website
  When User enters "arqureshi.3934@gmail.com" and "Automation"

Scenario: User is able to view add and remove from cart 
  Then User is able to select select view and delete item
  