import json
import urllib2

answer = urllib2.urlopen("https://uinames.com/api/")
nick = answer.read()
print nick

response = urllib2.urlopen("http://api.espn.com")
content = response.read()
print content
reponse2 = response.get("http://api.espn.com/v1/sports/baseball/mlb/teams")

data = response.json()
