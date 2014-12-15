(function(app) {
  function factory($q, $timeout, Model) {
    function fakeResponse(resolve) {
      var defer = $q.defer();
      $timeout(function() {
        defer.resolve(resolve);
      });
      return defer.promise;
    }
    var Mock = dcl([Model], {
      create: function() {
        return fakeResponse(this); 
      },
      update: function() {
        return fakeResponse(this); 
      },
      destroy: function() {
        return fakeResponse(this.id); 
      }
    });
    return Mock;
  }
  app.factory('MockModel', factory);
})(dclLib)