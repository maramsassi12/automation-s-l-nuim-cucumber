$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentication/Authentication.feature");
formatter.feature({
  "line": 2,
  "name": "Tester la page connexion",
  "description": "FTQ utilisateur je souhaite tester la page connexion",
  "id": "tester-la-page-connexion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authentication"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Tester la page connexion - ORANGE HRM",
  "description": "",
  "id": "tester-la-page-connexion;tester-la-page-connexion---orange-hrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "je saisie username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "je saisie le mot passe",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "je me redirige vers la page Home",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});