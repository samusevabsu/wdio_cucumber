Feature: Renter's app login

Scenario: User can login
      Given User is on Welcome page
      When User clicks Login button
      And User enters "daisy_auto@mailforspam.com" and "Aa!11111111"
      Then Profile icon is displayed