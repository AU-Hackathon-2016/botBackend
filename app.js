var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;
var targetID = null;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res) {res.status(200).send("Hello World!");});

app.listen(port, function(){
  console.log('Listening on port' + port);
});

app.post('/hello', function(req, res, next){
  var userName = req.body.user_name;
  var reponseList = ['Hello ' + userName + ', welcome to the Equifax Hackathon channel! Have fun :). You can type help for more details!'
                    , 'Nice to see you here, ' + userName + '! ' + 'What can I do for you (please type help!)'
                    , 'I am willing to do anything for you ' + userName + '! Type help so I can help you!'];
  var botPayload = {
    text: reponseList[Math.floor(Math.random()*3)]
  };

  if (userName != 'slackbot') {
    return res.status(200).json(botPayload);
  }
  else{
    return res.status(200).end();
  }
});

app.post('/help', function(req, res, next){
  var userName = req.body.user_name;
  var botPayload = {
    text: 'Don\'t Worry ' + userName + '! ' + 'I will show you how to communicate with me :).\n',
    attachments: [{"pretext": "Command line:",
             "color": "#36a64f", "text": "hello: Say hello to me, so that I know you are here!"},
            {"color": "#36a64f", "text": "echo message: I will echo message back to you :)"},
            {"color": "#e2ffb6", "text": "help: I can show you all commands I can understand :)"},
            {"color": "#415677", "text": "show name or nameID: I can know that your target ID"},
            {"color": "#b27485", "text": "select dataLocation: I can know where I can grab data for you"}
            ]
  };

  if (userName != 'slackbot') {
    return res.status(200).json(botPayload);
  }
  else{
    return res.status(200).end();
  }
});

app.post('/echo', function(req, res, next){
  var userName = req.body.user_name;
  var targetText = req.body.text;
  var botPayload = {
    text : targetText.substring(targetText.indexOf("echo") + 5)
  };

  if (userName != 'slackbot'){
    return res.status(200).json(botPayload);
  }
  else{
    return res.status(200).end();
  }
});

app.post('/show', function(req, res, next){
  var userName = req.body.user_name;
  var originalText = req.body.text;
  targetID = originalText.substring(originalText.indexOf("show") + 4).trim();

  var botPayload = {
    text : "Where do you want to grab personal information for " + targetID + " ?"
  };

  if (userName != 'slackbot'){
    return res.status(200).json(botPayload);
  }
  else{
    return res.status(200).end();
  };
});

/*
app.post('/select', function(req, res, next){
  var userName = req.body.user_name;
  var originalText = req.body.text;
  var targetWeb = originalText.substring(originalText.indexOf("select") + 6).trim();

  $.ajax({
    // Python server url
    url: "http://query.yahooapis.com/v1/public/yql",

    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",

    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",

    // Tell YQL what we want and that we want JSON
    data: {
        userName: targetID,
        website: targetWeb
    },

    // Work with the response
    success: function( response ) {
      botPayload = {
      "text" = response;
      }
      if (userName != 'slackbot'){
        return res.status(200).json(botPayload);
      }
      else{
        return res.status(200).end();
      }
    }
  });
});
*/
/*
var botPayload = {
  "attachments": [
      {
          "fallback": "Required plain-text summary of the attachment.",

          "color": "#36a64f",

          "pretext": "Optional text that appears above the attachment block",

          "author_name": "Bobby Tables",
          "author_link": "http://flickr.com/bobby/",
          "author_icon": "http://flickr.com/icons/bobby.jpg",

          "title": "Slack API Documentation",
          "title_link": "https://api.slack.com/",

          "text": "Optional text that appears within the attachment",

          "fields": [
              {
                  "title": "Priority",
                  "value": "High",
                  "short": false
              }
          ],

          "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
          "thumb_url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png"
      }
  ]
}
*/
