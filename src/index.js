const Alexa = require('alexa-sdk');
const anagrams = require('./anagrams');

var handlers = {
  getAnagrams: function() {
    console.log('getAnagrams intent called');
    console.log(JSON.stringify(this));
    if (this.event &&
        this.event.request &&
        this.event.request.intent &&
        this.event.request.intent.slots &&
        this.event.request.intent.slots.target &&
        this.event.request.intent.slots.target.value) {
      var target = this.event.request.intent.slots.target.value;
      var self = this;
      anagrams.getAnagrams(target, function(err, results) {
        console.log(results);
        self.emit(':tell', target + ' has ' + results.length + ' subanagrams. ' + results.join(', '));
      });
    } else {
      console.error('Missing target value');
      this.emit(':tell', 'I\'m sorry, I don\'t understand which word you\'re asking about');
    }
  },
  Unhandled: function() {
    console.log('Unhandled intent called');
    this.emit(':tell', 'I\'m sorry, I don\'t understand what you mean');
  }
};

exports.handler = function (event, context, lambdaCallback) {
  var alexa = Alexa.handler(event, context, lambdaCallback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
