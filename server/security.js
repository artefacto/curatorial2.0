// // Any client may insert, update, or remove a post without restriction
// Items.permit(['insert', 'update', 'remove']).apply();
//
// // No clients may insert, update, or remove posts
// Items.permit(['insert', 'update', 'remove']).never().apply();

// Clients may update posts only if a user is logged in
Items.permit('insert','update').ifLoggedIn().apply();

Annotations.permit('insert','update').ifLoggedIn().apply();

//
// // Admin users may add new items to the collection
// Items.permit('insert').ifHasRole('admin').apply();
