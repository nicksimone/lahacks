const USERNAME = nsimone;
const PASSWORD = sports1998;


$(document).ready(function()
{
  console.log("It works");

});
// console.log("It works");



function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}
$.ajax
  ({
    type: "GET",
    url: "https://api.mysportsfeeds.com/v1.2/pull/nba/2016-2017-regular/overall_team_standings.json?teamstats=W,L,PTS,PTSA&team=105",
    dataType: 'json',
    async: false,
    data: '{}',
    beforeSend: function (xhr){
        xhr.setRequestHeader('Authorization', make_base_auth(username, password));
    },
    success: function (){
        alert('Thanks for your comment!');
    }
});
