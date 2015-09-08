// Set up login services
Meteor.startup(function() {
    // Add Twitter configuration entry
     ServiceConfiguration.configurations.update(
     { service: "twitter" },
     { $set: {
     appId: "XXXXXXXXXXXXXXX",
     secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
     }
     },
     { upsert: true }
     );


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