# EmailSuggest 1.0
Suggest user defined emails or names to input (like gmail autosuggest)

**LIVE DEMO**

http://provized.com/emailsuggest

**HOW TO USE**

Needed: JQuery

1. Select the target input or all inputs
2. Add emailsuggest with email suggestions array named 'emails' as parameter
Note: You can also provide names and emails as array of 'names' with objects {'Name':'email@sample.com'}

Example (Only Emails):

`$('#emails').emailsuggest({`
     `emails: ['apple@example.com', 'ball@facebook.com', 'caterpillar@twitter.com', 'doctor@google.com']
});`

Example (With Names):

`$('#emails2').emailsuggest({
                 names: [{
                     'John Doe': 'johndoe@microsoft.com'
                 }, {
                     'Mohammed': 'mohammed@youtube.com'
                 }, {
                     'Elon Musk': 'elonmusk@paypal.com'
                 }, {
                     'Steve Jobs': 'stevejobs@apple.com'
                 }]
             });`
             
**VERSION CHANGELOG**

Version 1.0 (Released 17th April 2017)
Emails Suggest
Emails and Names Suggest
Up and Down Arrow Movement and Selection from Suggestions

Upcoming Changes (Hopefully, consider donating):
User profile picture support
Gmail Integration
Non jQuery Version

**DONATE**

After searching for long time on google for something like this, realized many people needed it
After a lot of effort as per self capability this was made

So, Please consider a donation, it will help me a lot (really)

Paypal Email: smoinuddin1110@gmail.com