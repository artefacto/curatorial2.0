// Only logged in users can add or update items
Items.permit('insert','update').ifLoggedIn().apply();

// Only logged in users can add or update annotations

Annotations.permit('insert','update').ifLoggedIn().apply();
