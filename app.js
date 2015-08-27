var app = angular.module("LetsMakeReddit", []);

app.controller("RedditClone", function($scope) {
  var posts = [];
  $scope.newPostBool = false;
  $scope.posts = [{
    author: "yR",
    description: "Some reddit description post",
    imageURL: "http://i.imgur.com/YezrFSe.jpg",
    title: "some reddit post title"},
  {
    author: "Ry",
    description: "post description reddit Some",
    imageURL: "http://i.imgur.com/mEtORc7.jpg",
    title: "title post reddit some"
  }
  ];

  $scope.newPostForm = function() {
    $scope.newPostBool = true;
  };

  $scope.renderPost = function() {
    $scope.newPostBool = false;

    $scope.posts.push($scope.newPost);
    console.log($scope.posts[0].title);
  };

});
