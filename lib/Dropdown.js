// Extends toggle
var Dropdown = dcl([Toggle], {
  declaredClass: "Dropdown",
  options: [],
  setOptions: function(options) {
    this.options = options;
  },
  constructor: function(data) {
    data = data || {};
    if(data.options) {
      this.setOptions(data.options);
    }
  }
});