Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  yieldTemplate: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  }
});



Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('about');
  this.route('contact');
});
