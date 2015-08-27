var app = angular.module("LetsMakeReddit", []);

app.controller("RedditClone", function($scope) {
  $scope.posts = [];
  // $scope.votes = 0;
  $scope.newPostBool = false;
  $scope.posts = [{
    author: "yR",
    description: "Some reddit description post",
    imageURL: "http://i.imgur.com/YezrFSe.jpg",
    title: "some reddit post title",
    votes: 0},
  {
    author: "Ry",
    description: "post description reddit Some",
    imageURL: "http://i.imgur.com/mEtORc7.jpg",
    title: "title post reddit some",
    votes: 0,
  }];

  $scope.newPostForm = function() {
    $scope.newPostBool = true;
  };

  $scope.renderPost = function() {
    $scope.newPostBool = false;

    $scope.posts.push($scope.newPost);
    console.log($scope.posts[0].title);
    // console.log($scope.posts);
  };

  $scope.ratePostUp = function(post) {
    // console.log($scope.post);
    post.votes += 1;
  };

  $scope.ratePostDown = function(post) {
    post.votes -= 1;
  };

});
