const USERNAME = "nsimone";
const PASSWORD = "sports1998";

var dodgers;

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
  url: 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2017-regular/overall_team_standings.json?teamstats=W,L,RF,RA&team=LAD',
  dataType: 'json',
  headers: {
    "Authorization": "Basic " + btoa('nsimone' + ":" + 'sports1998')
  },
  success: function (data){
    console.log('Got Data!');
    console.log(data);
    console.log(data.team['ID']);
    },
    error: function (xhr, ajaxOptions, thrownError) {
        console.log('error');
        alert(xhr.status);
        alert(thrownError);
     }
});
