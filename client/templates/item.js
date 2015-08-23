

Template.item.helpers({
currentPage: function(){
if (Iron.Location.get().rootUrl.length) {
  return Iron.Location.get().href
// return Router.current().url
} else {
  return "http://curatorial.us"
}


}

})
