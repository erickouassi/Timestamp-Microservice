
# API Project: Timestamp Microservice for FCC

### User stories :

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "natural" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"natural": "November 20, 2016"}`.
3. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "natural" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.

#### Example usage:
* https://ek-timestamp-microservice.glitch.me/May%2018,%201981
* https://ek-timestamp-microservice.glitch.me/1450137600000

#### Example output:
* {"unix":"358992000","natural":"May 18, 1981"}
