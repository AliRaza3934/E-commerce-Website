@productSearch
Feature: User is able to search and filter products.

  Background: User visits website
  Given User visits the website
 
 Scenario: User is able to search products
  When User is enters "<PRODUCT>"
  Then "<PRODUCT>" is returned
  

  Examples:
    | PRODUCT             |
    | LCD Display 16X2 with Header|


 Scenario: User is able to apply filters
 Then User is able to select  a categorys
 
  