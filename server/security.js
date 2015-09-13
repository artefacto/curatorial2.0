// Only logged in users can add or update items
Items.permit('insert','update').ifLoggedIn().apply();

// Only logged in users can add or update annotations

Annotations.permit('insert','update').ifLoggedIn().apply();

Security.defineMethod("ownsDocument", {
    fetch: ['author'],
    transform: null,
    deny: function (type, arg, author, doc) {
        return author !== doc.author;
    }
});

Annotations.permit('insert', 'update', 'remove').ownsDocument().apply();

Annotations.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});

