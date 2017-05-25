var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
        description: "Bacon ipsum dolor amet beef ribs jowl alcatra shank leberkas burgdoggen drumstick bresaola, sirloin cupim shankle cow pig turducken rump. Pastrami tongue alcatra beef ribs tenderloin drumstick tail jowl kielbasa flank brisket bacon swine rump strip steak. Jowl turkey andouille ham. Venison filet mignon turducken beef pancetta swine prosciutto tongue kevin tri-tip strip steak capicola. Jerky flank chuck, swine shoulder burgdoggen shankle biltong boudin shank pastrami."
    },
    {
        name: "Desert Mesa",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Bacon ipsum dolor amet beef ribs jowl alcatra shank leberkas burgdoggen drumstick bresaola, sirloin cupim shankle cow pig turducken rump. Pastrami tongue alcatra beef ribs tenderloin drumstick tail jowl kielbasa flank brisket bacon swine rump strip steak. Jowl turkey andouille ham. Venison filet mignon turducken beef pancetta swine prosciutto tongue kevin tri-tip strip steak capicola. Jerky flank chuck, swine shoulder burgdoggen shankle biltong boudin shank pastrami."
    },
    {
        name: "Canyon Floor",
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
        description: "Bacon ipsum dolor amet beef ribs jowl alcatra shank leberkas burgdoggen drumstick bresaola, sirloin cupim shankle cow pig turducken rump. Pastrami tongue alcatra beef ribs tenderloin drumstick tail jowl kielbasa flank brisket bacon swine rump strip steak. Jowl turkey andouille ham. Venison filet mignon turducken beef pancetta swine prosciutto tongue kevin tri-tip strip steak capicola. Jerky flank chuck, swine shoulder burgdoggen shankle biltong boudin shank pastrami."
    }
]

function seedDB() {
    // Campground.remove({}, function(err) {
    //     if(err) {
    //         console.log(err);
    //     }else {
    //         console.log("All removed");
    //         data.forEach(function(seed) {
    //             Campground.create(seed, function(err, campground) {
    //                 if(err) {
    //                     console.log(err);
    //                 }else {
    //                     console.log("added a campground");
    //                     Comment.create(
    //                         {
    //                             text: "This place is great, but I wish there was internet",
    //                             author: "Homer"
    //                         }, function(err, comment) {
    //                             if(err) {
    //                                 console.log(err);
    //                             }else {
    //                                 campground.comments.push(comment);
    //                                 campground.save();
    //                                 console.log("Create new Comment");
    //                             }
    //                         });
    //                 }
    //             });
    //         });
    //     }
    // });
}

module.exports = seedDB;

