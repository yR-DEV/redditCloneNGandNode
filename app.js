var app = angular.module("LetsMakeReddit", []);

app.controller("RedditClone", function($scope) {
  var posts = [];
  $scope.newPostBool = false;

  $scope.newPostForm = function() {
    $scope.newPostBool = true;
  };

  $scope.renderPost = function() {
    $scope.newPostBool = false;
    var tempArr = [];
    tempArr.push($scope.newPost);
    $scope.posts.push(tempArr);
    console.log($scope.posts);
  };

});
