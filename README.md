# botBackend

## General View

This is a repository for Personal-Data Searching bot.(Developed by CodingMonkey team, we call this CMbot). Everything will be running on cloud, which means you can try this bot experience wherever if your [slack](https://slack.com/) account is in our chatroom/channel.

We build this with a nice team. All teammates have their tasks and cooperate together to grab personal data from all social medias or websites.

## Components

* Web-Crawling section

 - [Python Crawling for Instagram](https://github.com/AU-Hackathon-2016/python-Insgram)

 - [Python Crawling for Twitter](https://github.com/AU-Hackathon-2016/twitter/tree/master/hackathon)

 - [Python Crawling for Facebook](https://github.com/AU-Hackathon-2016/python-facebook)

* Web Server Deployment
 - [Web deployment based on Node.js](https://github.com/AU-Hackathon-2016/botBackend)

## Configurations

1. #### Requirement:
   Before your configurations, at least two things you need to get familiar with: [Heroku](https://www.heroku.com/) and [Slark](https://slack.com/).

   We just do a brief introduction for these two cloud tool here.
   - Heroku: This is a cloud-based platform which provides amazing cloud service. You can create or deploy cloud applications on this platform.
   - Slark: This website can collect all those individual messages or communications on cloud. A lot of friendly APIs are provided on website.

2. #### Structure:
   The total structure can be seen in the following picture:
   [Structure image](./image/structure.png)

3. #### Deployment:
   All web response for communications are allocated in app.js file, which is demonstrated in Procfile. When deploy everything on Heroku, the heroku will read Procfile to find the entry for this web server and keep running. A evert listener is defined inside app.js file, then respond a coresponding webpage.

   On Slack, set listeners for our webpage response, then put them in dialogs as text format.
