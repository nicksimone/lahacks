const USERNAME = "nsimone";
const PASSWORD = "sports1998";

var lakers;

const url = "https://api.mysportsfeeds.com/v1.2/pull/nba/2016-2017-regular/overall_team_standings.json?teamstats=W,L,PTS,PTSA&team=105";




$.ajax({
  type: "GET",
  url: 'https://api.mysportsfeeds.com/v1.2/pull/nba/2016-2017-regular/full_game_schedule.json?team=LAL',
  dataType: 'json',
  headers: {
    "Authorization": "Basic " + btoa('nsimone' + ":" + 'sports1998')
  },
  success: function (data){
    console.log('Got Data!');
    console.log(data);
    console.log(data.fullgameschedule.gameentry[0].time);
    console.log(data.fullgameschedule.gameentry[0].date);
    // $('#output-text').append(data.fullgameschedule.gameentry[0].date);
    console.log(data.fullgameschedule.gameentry[0].awayTeam['City']);
    for(var i = 0; i < 82; i++)
    {
        $('#output-text').append(data.fullgameschedule.gameentry[i].awayTeam['City'] + " vs "
            + data.fullgameschedule.gameentry[i].homeTeam['City']);
        $('#output-text').append('\n');
    // $('#output-text').append('\n');
    }
    // console.log(data.overallteamstandings['lastUpdatedOn']);
    },
    error: function (xhr, ajaxOptions, thrownError) {
        console.log('error');
        alert(xhr.status);
        alert(thrownError);
     }
});

$.ajax({
  type: "GET",
  url: url,
  dataType: 'json',
  headers:
  {
    "Authorization": "Basic " + btoa('nsimone' + ":" + 'sports1998')
  },
  success: function (data)
  {
    console.log('Got Data2!');
  },
  error: function (xhr, ajaxOptions, thrownError) {
      console.log('error');
      alert(xhr.status);
      alert(thrownError);
   }
});
