if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.commentList.helpers({     
    comments: function() {           
      return [
      {
        timestamp: new Date,         // d  (  data
        login: 'Jewels',             // a   container )
        room: 'main',                // t
        comment: 'First Comment'     // a
      },
      {
        timestamp: new Date, 
        login: 'Jewels',
        room: 'main',
        comment: 'Second Comment'
      }
      ]
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
