var app = angular.module("LetsMakeReddit", []);

app.controller("RedditClone", function($scope) {

  $scope.newPostBool = false;

  $scope.newPostForm = function() {
    $scope.newPostBool = true;
  };

  $scope.renderPost = function() {
    $scope.newPostBool = false;
  };

});
