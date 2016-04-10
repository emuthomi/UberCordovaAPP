/**
 *
 * Created by Matthias on 12/4/15.
 */

angular.module('uber_core').controller('NewRideController', [
    '$scope',
    'Authentication',
    '$ionicPopup',
    '$state',
    'Notifications',
    'FriendsContact',
    '$ionicBackdrop',
    function ($scope, Authentication, $ionicPopup, $state, Notifications, FriendsContact) {

        $scope.data = {
            number: '',
            showDelete: false,
            friendsList: [],
            products: []
        };

        var contactHelper = new FriendsContact($scope);

        $scope.addToRide = contactHelper.addToRide;
        $scope.searchForFriend = contactHelper.searchForFriend;
        $scope.removeFromRide = contactHelper.removeFromRide;
        $scope.contactInput = contactHelper.contactInput;


        contactHelper.addFriendsListener(function (friendsList) {
            $scope.data.friends = friendsList;
        });

        contactHelper.searchListener(function (searchList) {
            $scope.data.searchList = searchList;
        });

        $scope.continue = function () {
            $state.go('tabs.ride_destination')
        };

    }
]);
