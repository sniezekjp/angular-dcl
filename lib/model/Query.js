(function(app) {
  function factory($http, $q) {
    // Must pass in a Model Class
    var Query = dcl(null, {
      findOne: function(id) {
        var defer = $q.defer();
        $http.get(this.url + '/' + id).success(function(model) {
          defer.resolve(new this.Model(model));
        });
        return defer.promise;
      },
      find: function(query) {
        var defer = $q.defer();
        var params = {
          params: query
        };
        $http.get(this.url, params).success(function(models) {
          var result = []; 
          models.forEach(function(model) {
            result.push(new this.Model(model));
          });
          defer.resolve(result);
        });
        return defer.promise;
      },
      factory: function(data) {
        return new this.Model(data);
      }
    });
    return Query;
  }
  app.factory('Query', factory);
})(dclLib)