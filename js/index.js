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



// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }


$("#to_register").click(function (e) { 
    e.preventDefault();
    $("#register").show(3000);
    $("#logining").hide(1000);
})

// $('#to_login').click(function(){
//     setTimeout(function(){
//         location.reload();
//     }, 5000);
// });

// function toregister(){
//     $("#logining").show(1000);
//     $("#register").hide();
// }

// $("#to_login").click(function (e) { 
//     e.preventDefault();
//     $("#logining").show(3000);
//     $("#register").hide(1000);
// })

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
}

// var googleUser = {};
// var startApp = function() {
// gapi.load('auth2', function(){
//     // Retrieve the singleton for the GoogleAuth library and set up the client.
//     auth2 = gapi.auth2.init({
//     client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
//     cookiepolicy: 'single_host_origin',
//     // Request scopes in addition to 'profile' and 'email'
//     //scope: 'additional_scope'
//     });
//     attachSignin(document.getElementById('customBtn'));
// });
// };

// function attachSignin(element) {
// console.log(element.id);
// auth2.attachClickHandler(element, {},
//     function(googleUser) {
//         document.getElementById('name').innerText = "Signed in: " +
//             googleUser.getBasicProfile().getName();
//     }, function(error) {
//         alert(JSON.stringify(error, undefined, 2));
//     });
// }


function wait(){
    alert ("Your Registration Done : Good Work ");
}


// User database
// let users = [];

// // Login form submit event listener
// ("#login-form").addEventListener("submit", function(event) {
//     let username = document.querySelector("#username").value;
//     let password = document.querySelector("#password").value;
//     // Check if the user exists in the database
//     let user = users.find(user => user.username === username && user.password === password);
//     if (user) {
//         alert("Login successful!");
//     } else {
//         alert("Login failed. Incorrect username or password.");
//     }
// });

// // Register form submit event listener
// ("#register-form").addEventListener("submit", function(event) {
//     let username = document.querySelector("#username").value;
//     let email = document.querySelector("#email").value;
//     let password = document.querySelector("#password").value;
//     // Check if the username already exists
//     let existingUser = users.find(user => user.username === username);
//     if (existingUser) {
//         alert("Username already exists. Please choose a different username.");
//     } else {
//         // Add the new user to the database
//         users.push({ username, email, password });
//         alert("Registration successful!");
//     }
// });