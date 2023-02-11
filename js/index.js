$("#mode").click(function (e) { 
    e.preventDefault();
    $("#body").toggleClass('dark-mode')

})


$("#addVideosBtn").click(function (e) { 
    e.preventDefault();
    $("#adding_video").show(1000)
    $("#adding_link").hide()
    $("#addVideosBtn").hide()
    $("#addlinkBtn").hide()
})

$("#addlinkBtn").click(function (e) { 
    e.preventDefault();
    $("#adding_link").show(1000)
    $("#adding_video").hide()
    $("#addVideosBtn").hide()
    $("#addlinkBtn").hide()
})

function myFunction() {
    document.getElementById("main_modal").style.display = "none";
}

function reload_fun() {
    location.reload();
}

// function AddVideo (form) {
//     var video_val = form.addvideo.value;
//     alert ("You typed: " + video_val);
// }

// function Add_Link (form) {
//     var link_val = form.addlink.value;
//     var split_link = link_val.split("&");
//     // https://www.youtube.com/watch?v=8u2s64ZtmiA&list=PLLHTzKZzVU9e6xUfG10TkTWApKSZCzuBI&index=13&ab_channel=AlfredoCanziani
//     var first_index = split_link[0];
//     var split_first_index = first_index.split("=");
//     var id = split_first_index[1];
//     console.log(id);
//     alert ("You typed: " + link_val);
//     // return id;
// }



// https://www.youtube.com/watch?v=8u2s64ZtmiA&list=PLLHTzKZzVU9e6xUfG10TkTWApKSZCzuBI&index=13&ab_channel=AlfredoCanziani
// var link_val = document.getElementsByName("addlink")[0].value;
function Add_Link () {
    const link_val = document.getElementsByName("addlink")[0].value;
    var split_link = link_val.split("&");
    var first_index = split_link[0];
    var split_first_index = first_index.split("=");
    var id = split_first_index[1];
    var full_link = "https://www.youtube.com/embed/" + id;
    console.log(full_link);
    // alert ("You typed: " + full_link);
    return full_link;
    // document.getElementById("dub_iframe").src = full_link;
}
// document.getElementById("dub_iframe").src ="https://www.youtube.com/embed/" + Add_Link ();

// var link = Add_Link();

// console.log(Add_Link ());

// document.getElementById("dub_iframe").src = link;


// $("#options").click(function(){
//     $("#dub_iframe").attr("src","https://www.youtube.com/embed/");
// });
