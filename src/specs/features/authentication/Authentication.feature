@authentication
Feature: Tester la page connexion
  FTQ utilisateur je souhaite tester la page connexion

  @cnx
  Scenario: Tester la page connexion - ORANGE HRM
    Given Je me connecte sur l'application Orange HRM
    When je saisie username
    And je saisie le mot passe
    And je clique sur le bouton login
    Then je me redirige vers la page Home
