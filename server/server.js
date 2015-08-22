Meteor.startup(function() {
 if(Items.find().count() === 0) {
   // Items
   Items.insert({title:'Reverends Peres Fraiicisciaiis avec Monseigneur Bruchesi au centre.', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Reverends_Peres_Fraiicisciaiis_avec_Monseigneur_Bruchesi_au_centre_%28HS85-10-10002%29_original.tif/lossy-page1-563px-Reverends_Peres_Fraiicisciaiis_avec_Monseigneur_Bruchesi_au_centre_%28HS85-10-10002%29_original.tif.jpg', description: "Français : Reverends Peres Fraiicisciaiis avec Monseigneur Bruchesi au centre.", order: 6, date: 1898, medium: 'Ebook',catName:'Canada', artist: "Laprés et Lavergne"});
   Items.insert({title:'Her Excellency Lady Aberdeen', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Her_Excellency_Lady_Aberdeen_%28HS85-10-10178%29.jpg/861px-Her_Excellency_Lady_Aberdeen_%28HS85-10-10178%29.jpg', description: "English: Her Excellency Lady Aberdeen.", order: 5, medium: '',catName:'Canada', date: 1898, artist: "Stephen Joseph Thompson"});
   Items.insert({title:'His Excellency Lord Aberdeen', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/His_Excellency_Lord_Aberdeen_%28HS85-10-10177%29.jpg/848px-His_Excellency_Lord_Aberdeen_%28HS85-10-10177%29.jpg', description: "English: His Excellency Lord Aberdeen.", order: 4, medium: '',catName:'Cats', date: 1898, artist: "Stephen Joseph Thompson"});
   Items.insert({title:'Beign Mortal', url:'http://ecx.images-amazon.com/images/I/91E6exaOufL.jpg', order: 3, format: 'Ebook',catName:'Cats'});
   Items.insert({title:'A chart of Plymouth Sound, with \"il novo recinto della fortificatione de la ville de Pleymouth', url:'http://ogimages.bl.uk/images/001/001COTAUGI00001U00040000[SVC1].jpg', description: "This is a plan of the area around Plymouth Sound. It is orientated to the south with Penlee point to the south west and Bovisand Bay south east. It dates from 1601-1602 and may show the proposals of the Italian engineer Frederico Genibelli. Genibelli had been sent by the Privy Council in response to requests by the governor of the fort, Sir John Gilbert, that defects in the fortifications be repaired. Plymouth Sound is situated in such a way as to make it an ideal invasion target as although geographically far from heart of national government Plymouth was accessible to the outside world, especially France and Spain and provided access to centre of the country.\nThis plan illustrates the position occupied by the fort in relation both to the town and to its surrounding countryside, although the latter is inaccurately portrayed out of scale. The town of Plymouth is surrounded by a perimeter wall. Beacons are shown at Staddon, Maker and Penlee, highlighting the measures in place to raise the alarm in case of invasion.\nWhen surveying the deficiencies in the defences of the fort and island, Genibelli outlined a new scheme for fortifying the town with nine ravelins at a cost of £3000. These are outworks which consist of two faces which form a salient angle. The proposed scheme is clearly shown here but was not carried out by the government.", order: 2, medium: 'Pen and ink on paper',catName:'Charts', date: '1601'});
   Items.insert({title:'Principles Of Web Design', url:'https://yuq.me/users/27/445/MXtELWFw17.jpg', order: 1, format: 'Ebook',catName:'Boredom'});
}
  if(Categories.find().count() === 0) {
    // Categories
    Categories.insert({name:'Beards'});
    Categories.insert({name:'Pirates'});
    Categories.insert({name:'Cats'});
    Categories.insert({name:'Mustaches'});
    Categories.insert({name:'Boredom'});
    Categories.insert({name:'Canada'});
  }



});

//
// Meteor.startup(function() {
//   //var data1 = JSON.parse(Assets.getText('data/picturing_canada.json'));
// var data2 = JSON.parse(Assets.getText('data/The_unveiling_of_Britain.json'));
//   var items = [data2];
//   _.each(items, function(item) {
//         Items.insert(item);
//   });
// });


// Meteor.startup(function() {
//   var title, description, url, ;
//   locations = [];
//   ref = geojson.features;
//   for (i = 0, len = ref.length; i < len; i++) {
//     feature = ref[i];
//     ID = feature.properties["ID"];
//     name = feature.properties["Address1"] || feature.properties["BuildingName"];
//     description = feature.properties["Address2"];
//     latlng = feature.geometry["coordinates"];
//     postcode = feature.properties["PostCode"];
//     address= feature.properties["Address2"];
//     city = feature.properties["Address3"];
//     organisation = feature.properties["Organisation"];
//     category = feature.properties["FacilityType"];
//     marker_symbol = feature.properties["marker-symbol"];
//     lng = latlng[0];
//     lat = latlng[1];
//     location = {
//       ID: ID,
//       name: name,
//       description: description,
//       organisation: organisation,
//       address: address,
//       city: city,
//       postcode: postcode,
//       lat: lat,
//       lng: lng,
//       latlng: latlng,
//       category:category
//     };
//     locations.push(location);
//   }
//
//   if (Locations.find().count() === 0) {
//     results = [];
//     for (j = 0, len1 = locations.length; j < len1; j++) {
//       location = locations[j];
//       results.push(Locations.insert(location));
//     }
//     return results;
//   }
// });

Meteor.publish("items", function () {
   return Items.find();
 });

Meteor.publish("categories", function(){
  return Categories.find();
})

Meteor.publish('itemAnnotations', function(itemId) {
    return Annotations.find({itemId: itemId});
});

Sortable.collections = Items;
Sortable.collections = Favorites;
