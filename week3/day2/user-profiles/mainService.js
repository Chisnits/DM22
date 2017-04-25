angular.module('userProfiles').service('mainService', function(){


var data = 
[{
    "id": 0,
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
},
{
    "id": 1,
    "first_name": "Lucille",
    "last_name": "Bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
},
{
    "id": 2,
    "first_name": "Oscar",
    "last_name": "Bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
},
{
    "id": 3,
    "first_name": "Chase",
    "last_name": "Derr",
    "avatar": "http://www.livetradingnews.com/wp-content/uploads/2016/11/14-072210-anonymous_declares_total_war_on_donald_trump.jpg"
}]

this.getUsers = function(){
    return data;
}

this.toggleFavorite = function(userIndex){
    data[userIndex].isFavorite = !data[userIndex].isFavorite;
}


});
