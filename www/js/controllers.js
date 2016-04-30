angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  if (typeof analytics !== undefined) { analytics.trackView("DashCtrl"); }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  if (typeof analytics !== undefined) {
    analytics.trackView("ChatsCtrl");
    analytics.trackEvent('ChatsCategory', 'ChatsAction', 'ChatsLabel', 1);
    analytics.trackException('ChatsDescription', 1);
    analytics.trackTiming('ChatsCategory', 1000, 'ChatsVariable', 'ChatsLabel');
    analytics.addTransaction('ID', 'Affiliation', 100, 8, 108, 'Currency Code');
    analytics.addTransactionItem('ID', 'Name', 'SKU', 'Category', 108, 5, 'JPY');
    analytics.addCustomDimension('Key', 'Value', 1, 0);
    analytics.setUserId('user-0001');
  }

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  if (typeof analytics !== undefined) { analytics.trackView("ChatDetailCtrl"); }
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  if (typeof analytics !== undefined) { analytics.trackView("AccountCtrl"); }
  $scope.settings = {
    enableFriends: true
  };
});
