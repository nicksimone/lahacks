const USERNAME = "nsimone";
const PASSWORD = "sports1998";

var rams;

const url = "https://api.mysportsfeeds.com/v1.2/pull/nba/2016-2017-regular/overall_team_standings.json?teamstats=W,L,PTS,PTSA&team=105";

// fetch(url)
//   .then((resp) => resp.json())
//   .then(function(data)
//   {
//     // Here you get the data to modify as you please
//   })
//   .catch(function(error) {
//     // If there is any error you will catch them here
//   });
//
// $(document).ready(function()
// {
//   setup();
//   console.log("It works");
// });
//
// function setup()
// {
//   loadJSON("https://api.mysportsfeeds.com/v1.2/pull/nba/2016-2017-regular/overall_team_standings.json?teamstats=W,L,PTS,PTSA&team=105", gotData);
// }
//
// function gotData(data)
// {
//   lakers = data;
// }
//
// function make_base_auth(user, password) {
//   var tok = user + ':' + password;
//   var hash = btoa(tok);
//   return "Basic " + hash;
// }


$.ajax({
  type: "GET",
  url: 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/overall_team_standings.json?teamstats=W,L,T,PF,PA&team=LA',
  dataType: 'json',
  headers: {
    "Authorization": "Basic " + btoa('nsimone' + ":" + 'sports1998')
  },
  success: function (data){
    console.log('Got Data!');
    console.log(data);
    $('#team-city').text(data.overallteamstandings.teamstandingsentry[0].team['City']);
    $('#team-name').text(data.overallteamstandings.teamstandingsentry[0].team['Name']);
    $('#team-abbrev').text(data.overallteamstandings.teamstandingsentry[0].team['Abbreviation']);
    $('#rank').append(data.overallteamstandings.teamstandingsentry[0].rank);
    $('#games-played').append(data.overallteamstandings.teamstandingsentry[0].stats.GamesPlayed['#text']);
    $('#wins').append(data.overallteamstandings.teamstandingsentry[0].stats.Wins['#text']);
    $('#losses').append(data.overallteamstandings.teamstandingsentry[0].stats.Losses['#text']);
    $('#ties').append(data.overallteamstandings.teamstandingsentry[0].stats.Ties['#text']);
    $('#points-for').append(data.overallteamstandings.teamstandingsentry[0].stats.PointsFor['#text']);
    $('#points-against').append(data.overallteamstandings.teamstandingsentry[0].stats.PointsAgainst['#text']);
    },
    error: function (xhr, ajaxOptions, thrownError) {
        console.log('error');
        alert(xhr.status);
        alert(thrownError);
     }
});
