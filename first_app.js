Comments = new Mongo.Collection('comments'); // name a new collection 

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.CommentList.helpers({     
    comments: function() {           
      return Comments.find();
                          // cursor is like a reg js obj so you can call functions on it
    }
  });

  Template.CommentAdd.events({   // how to set an event
    'submit form': function(e, tmpl) {// handler & selector  with 'e' like jQuery and 'tmpl' = object that reps instance of template on page
      e.preventDefault();  // wont submit

      var formEl = tmpl.find('form');
      var commentEl = tmpl.find("[name=comment]");
      var comment = commentEl.value;

      Comments.insert({
        login: 'giulz42', 
        timestamp: new Date,
        room: 'main',
        comment: comment   // adds comment from above
      });

      formEl.reset();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
