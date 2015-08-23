

Template.item.helpers({
currentPage: function(){
//return Router.current().itemShow
  return Iron.Location.get().href
// return Router.current().url

}

})
