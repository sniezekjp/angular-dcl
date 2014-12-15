(function() {
  // Extends toggle
  function factory(Toggle) {
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
    return Dropdown;
  }
  angular.module('dclLib').factory('Dropdown', factory);
})();