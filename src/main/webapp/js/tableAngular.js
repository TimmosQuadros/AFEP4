/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module('tableApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
            .when("/friends", {
                templateUrl: "views/list.html",
                controller: "tableController"
            })
            .otherwise({
                redirectTo: "/"
            });
});

myApp.factory('memberFactory', function () {

    var members = [];

    var member = function (id, age, eyeColor, name, email) {
        this.id = id;
        this.age = age;
        this.eyeColor = eyeColor;
        this.name = name;
        this.email = email;
        this.friends = new Array();
        this.addFriend = function (member) {
            this.friends.push(member);
        };
    };

    var friend = function (id, age, eyeColor, name, email) {
        this.id = id;
        this.age = age;
        this.eyeColor = eyeColor;
        this.name = name;
        this.email = email;
    };

    function getRestMembers() {
        members = [];
        $.getJSON("http://localhost:8080/AngularJquery/api/member/all", function (result)
        {
            $.each(result, function (i, m)
            {
                m1 = new member(m.id, m.age, m.eyeColor, m.name, m.email);
                friendArr = m.friends;
                $.each(friendArr, function (j, f)
                {
                    f1 = new friend(f.id, f.age, f.eyeColor, f.name, f.email);
                    m1.addFriend(f1);
                });
                members.push(m1);
            });
        }
        );
    }

    var getMembers = function () {
        getRestMembers();
        return members;
    };

    return {
        getMembers: getMembers
    };
});


myApp.controller('tableController', ["memberFactory",function (memberFactory) {

        var self = this;

        self.members = memberFactory.getMembers();

        self.getMembers = function(){
            self.members = memberFactory.getMembers();
        };

        





    }]);

