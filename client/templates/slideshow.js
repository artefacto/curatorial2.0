Template.slideshow.onRendered(function () {
    this.$('#carousel').slick({
        infinite: true,
        dots: true,
        autoplay: true
    });


});

Template.slideshow.helpers({
    slides: function(){
        return Items.find({});
    }
})