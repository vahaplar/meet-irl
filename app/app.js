(function() {
  "use strict";
  // Add modules
  angular
    .module("meetIrl", [
      "ui.router",
      "api.users",
      "components.users"
    ])
    .config(function($urlRouterProvider) {
      $urlRouterProvider.otherwise("/users");
    });
})();
