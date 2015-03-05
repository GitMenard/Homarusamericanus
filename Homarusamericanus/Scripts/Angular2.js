angular.module('plunker', [])

var app = angular.module('appname', []);

app.controller('TodoCtrl', function ($scope) {
    $scope.totalTodos = 4;
});

.config(function ($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'list.html',
        controller: 'ListCtrl'
    })
      .when('/edit/:book', {
          templateUrl: 'edit.html',
          controller: 'EditCtrl'
      })
      .otherwise({
          redirectTo: '/list'
      });
})


.service('BookService', function ($q, $timeout) {
    var unassigned = ['English', 'History'];

    this.getUnassigned = function () {
        var deferred = $q.defer();

        // Simulate async call to server.
        $timeout(function () {
            deferred.resolve(unassigned);
        });

        return deferred.promise;
    };

})

.controller('EditCtrl', function ($scope, $routeParams, BookService) {
    // student.book needs to be set to avoid null select option
    $scope.student = { book: $routeParams.book, name: $routeParams.name };
    $scope.unassigned = BookService.getUnassigned().then(function (data) {
        return [$routeParams.book].concat(data);
    });
})

.controller('ListCtrl', function ($scope) {
    $scope.students = [{
        name: 'Billy',
        book: 'Math'
    }, {
        name: 'Joe',
        book: 'Science'
    }];
});