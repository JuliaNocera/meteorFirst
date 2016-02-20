Comments = new Mongo.Collection('comments'); // name a new collection 

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.CommentList.helpers({     
    comments: function() {           
      return Comments.find();
                          // cursor is like a reg js obj so you can call functions on it
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
