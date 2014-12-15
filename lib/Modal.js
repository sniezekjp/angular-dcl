// Extends toggle
var Modal = dcl([Toggle], {
  declaredClass: "Modal",
  constructor: function(data) {
    data = data || {};
    this.templateUrl = data.templateUrl; 
    this.title = data.title;
  }
});