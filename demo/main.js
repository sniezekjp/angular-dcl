var app = angular.module('app', ['ngAnimate', 'dclLib']);


app.factory('ModalFactory', function(Modal) {
  return {
    login: function() {
      return new Modal({
        templateUrl: "/views/login.tpl.html",
        title: "Login"
      });
    }
  }
});

app.factory("MenuFactory", function(Dropdown) {
  return {
    account: function() {
      return new Dropdown({
        options: [
          { name: "Profile" },
          { name: "Settings" },
          { name: "Logout" },
        ]
      });
    }
  }
});

app.controller('MainCtrl', function(ModalFactory, MenuFactory) {
  this.login = ModalFactory.login();
  this.menu  = MenuFactory.account();
});







