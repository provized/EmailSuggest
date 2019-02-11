# EmailSuggest 1.2
Suggest user defined emails or names to input (like gmail autosuggest)

**LIVE DEMO**

http://codepen.io/provized/pen/wdaMPX

**HOW TO USE**

Needed: JQuery

1. Select the target input or all inputs
2. Add emailsuggest with email suggestions array named 'emails' as parameter
Note: You can also provide names and emails as array of 'names' with objects {'Name':'email@sample.com'}

Example (Only Emails):

```
$('#emails').emailsuggest({
     emails: ['apple@example.com', 'ball@facebook.com', 'caterpillar@twitter.com', 'doctor@google.com']
});
```

Example (With Names):

```
$('#emails2').emailsuggest({
     names: [{
         name: 'John Doe',
         email: 'johndoe@microsoft.com'
     }, {
         name: 'James Bond',
         email: 'jamesbond007@britishintelligence.com'
     }, {
         name: 'Elon Musk',
         email: 'elonmusk@teslacars.com'
     }, {
         name: 'Steve Jobs',
         email: 'stevejobs@apple.com'
     }]
});
```
             
**VERSION CHANGELOG**

Version 1.0 (Released 17th April 2017)
1. Emails Suggest
2. Emails and Names Suggest
3. Up and Down Arrow Movement and Selection from Suggestions

Version 1.1 (Released 21st May 2017)
1. Changed the name and email suggestion array structure

Version 1.2 (Released 1st February 2019)
1. Improved the Demo UI

Version 1.2.1 (Released 11th February 2019)
1. Minor Fixes
2. Separated Emailsuggest CSS from Demo CSS

Upcoming Changes (Hopefully, consider donating):
1. User profile picture support
2. Gmail Integration
3. Non jQuery Version

**DEVELOPED BY**

Shaikh Adnan Moinuddin

**CUSTOMIZATION & DONATE**

After searching for long time on google for something like this, we coded a plugin that suggests email or username.
Realized many people needed it so we made it open source and free to use.

So, Please consider a donation, it will help me a lot (really)

Paypal Email: smoinuddin1110@gmail.com