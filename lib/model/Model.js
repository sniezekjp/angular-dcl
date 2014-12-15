(function(app) {
  function factory($http) {
    var Model = dcl(null, {
      constructor: function(model) {
        angular.extend(this, model);
      },
      create: function() {
        return $http.post(this.url, this);
      },
      update: function() {
        return $http.put(this.url + '/' + this.id, this);
      },
      destroy: function() {
        return $http.delete(this.url + '/' + this.id);
      }
    });
    return Model;
  }

  app.factory('Model', factory);
})(dclLib)