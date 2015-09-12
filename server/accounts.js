// Set up login services
Meteor.startup(function() {
     //Add Twitter configuration entry - fixing http://stackoverflow.com/questions/15592194/meteor-twitter-login-internal-server-error
  Accounts.loginServiceConfiguration.remove({
   service: "twitter"
  });
  Accounts.loginServiceConfiguration.insert({
   service: "twitter",
   consumerKey: "ZR1k2D20aQrzKM4TjYncgfZ0B",
   secret: "bGEkJnlfluWVOvWkaAFFuCmus4qP0VMJJN8IjYVEuTeUHxlIHD"
  });


    // Add GitHub configuration entry
    /*
     ServiceConfiguration.configurations.update(
     { service: "github" },
     { $set: {
     clientId: "XXXXXXXXXXXXXXXXXXXX",
     secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
     }
     },
     { upsert: true }
     );
     */

    // Add Google configuration entry
    //ServiceConfiguration.configurations.update(
    //    { service: "google" },
    //    { $set: {
    //        clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    //        client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    //        secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
    //    }
    //    },
    //    { upsert: true }
    //);

    // Add Linkedin configuration entry
    /*
     ServiceConfiguration.configurations.update(
     { service: "linkedin" },
     { $set: {
     clientId: "XXXXXXXXXXXXXX",
     secret: "XXXXXXXXXXXXXXXX"
     }
     },
     { upsert: true }
     );
     */
});