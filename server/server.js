Meteor.startup(function() {
//  if(Items.find().count() === 0) {
//    // Items
//    Items.insert({title:'Reverends Peres Fraiicisciaiis avec Monseigneur Bruchesi au centre.', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Reverends_Peres_Fraiicisciaiis_avec_Monseigneur_Bruchesi_au_centre_%28HS85-10-10002%29_original.tif/lossy-page1-563px-Reverends_Peres_Fraiicisciaiis_avec_Monseigneur_Bruchesi_au_centre_%28HS85-10-10002%29_original.tif.jpg', description: "Français : Reverends Peres Fraiicisciaiis avec Monseigneur Bruchesi au centre.", order: 6, date: 1898, medium: 'Ebook',catName:'Canada', artist: "Laprés et Lavergne"});
//    Items.insert({title:'Her Excellency Lady Aberdeen', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Her_Excellency_Lady_Aberdeen_%28HS85-10-10178%29.jpg/861px-Her_Excellency_Lady_Aberdeen_%28HS85-10-10178%29.jpg', description: "English: Her Excellency Lady Aberdeen.", order: 5, medium: '',catName:'Canada', date: 1898, artist: "Stephen Joseph Thompson"});
//    Items.insert({title:'His Excellency Lord Aberdeen', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/His_Excellency_Lord_Aberdeen_%28HS85-10-10177%29.jpg/848px-His_Excellency_Lord_Aberdeen_%28HS85-10-10177%29.jpg', description: "English: His Excellency Lord Aberdeen.", order: 4, medium: '',catName:'Cats', date: 1898, artist: "Stephen Joseph Thompson"});
//    Items.insert({title:'A chart of Plymouth Sound, with \"il novo recinto della fortificatione de la ville de Pleymouth', url:'http://ogimages.bl.uk/images/001/001COTAUGI00001U00040000[SVC1].jpg', description: "This is a plan of the area around Plymouth Sound. It is orientated to the south with Penlee point to the south west and Bovisand Bay south east. It dates from 1601-1602 and may show the proposals of the Italian engineer Frederico Genibelli. Genibelli had been sent by the Privy Council in response to requests by the governor of the fort, Sir John Gilbert, that defects in the fortifications be repaired. Plymouth Sound is situated in such a way as to make it an ideal invasion target as although geographically far from heart of national government Plymouth was accessible to the outside world, especially France and Spain and provided access to centre of the country.\nThis plan illustrates the position occupied by the fort in relation both to the town and to its surrounding countryside, although the latter is inaccurately portrayed out of scale. The town of Plymouth is surrounded by a perimeter wall. Beacons are shown at Staddon, Maker and Penlee, highlighting the measures in place to raise the alarm in case of invasion.\nWhen surveying the deficiencies in the defences of the fort and island, Genibelli outlined a new scheme for fortifying the town with nine ravelins at a cost of £3000. These are outworks which consist of two faces which form a salient angle. The proposed scheme is clearly shown here but was not carried out by the government.", order: 2, medium: 'Pen and ink on paper',catName:'Charts', date: '1601'});
// }


var items = JSON.parse(Assets.getText("data/sample-data.json"));

for (var i = 0, len = items.length; i < len; i++) {
  var item = items[i];

  Items.insert({
    title: item.title,
    url: item.url,
    description: item.description,
    order: item.order,
    date: item.date,
    medium: item.medium,
    categoryName: item.categoryName,
    artist: item.artist
  });
}

  if(Categories.find().count() === 0) {
    // Some initial categories
    Categories.insert({name:'Beards'});
    Categories.insert({name:'Pirates'});
    Categories.insert({name:'Cats'});
    Categories.insert({name:'Mustaches'});
    Categories.insert({name:'Boredom'});
    Categories.insert({name:'Canada'});
  }
});


Meteor.publish("items", function () {
   return Items.find();
 });

Meteor.publish("categories", function(){
  return Categories.find();
})

// return the user's own annotations only
Meteor.publish('itemAnnotations', function() {
    return Annotations.find({author: this.userId});
});

Sortable.collections = Items;
Sortable.collections = Favorites;
