(function() {
  function factory() {
    // Base class for modal/dropdowns
    var Toggle = dcl(null, {
      _open: false,
      isOpen: function() {
        return this._open;
      },
      isClosed: function() {
        return !this._open;
      },
      toggle: function() {
        this._open = !this._open;
        return this._open;
      },
      open: function() {
        this._open = true;
        return this._open;
      },
      close: function() {
        this._open = false;
        return this._open;
      }
    });
    return Toggle; 
  }
  angular.module('dclLib').factory('Toggle', factory);
})()