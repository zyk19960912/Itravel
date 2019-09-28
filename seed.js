var mongoose = require("mongoose");
var Campground= require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"cloudy orange sky",
        image:"https://images.unsplash.com/photo-1523380532023-eebaba62acf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=33a75b4952e8bd5f161a6d9151c2994c&auto=format&fit=crop&w=500&q=60",
        description:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th"
    },
    {
        name:"gray rock on body of water during daytime",
        image:"https://images.unsplash.com/photo-1455402115187-78cdabd01811?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40c936584738fdd888a809f757b1d2b8&auto=format&fit=crop&w=500&q=60",
        description:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th"
    },
    {
        name:"body of water near mountain",
        image:"https://images.unsplash.com/photo-1531420771936-d5fdcec3cca6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cebb671b57b54a19cff57c1df3ca91b8&auto=format&fit=crop&w=500&q=60",
        decription:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th"
    },
]
function seedDB(){
    //remove all campgrounds
    Campground.remove({},function(err){
    if(err){
        console.log(err);
    }
    console.log("remove campgrounds");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("add a mountain");
                    //add a few comments
                    Comment.create(
                        {
                            text:"This is a great place!!!",
                            author:"Homer"
                        },function(err,comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("create new comment");
                            }
                           
                        });
                }
            });
        });
    });
}
module.exports = seedDB;