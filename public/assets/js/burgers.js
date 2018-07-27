$(document).ready(function(){
  // var burgersVar;
  
  // function getTodos() {
  //   $.get("/api/burgers", function(data) {
  //     burgerArr = data;
  //     initializeRows();
  //   });
  // }
  // getTodos();

  // var posts;
  // function getPosts() {
  //   $.get("/api/posts", function(data) {
  //     console.log("Posts", data);
  //     posts = data;
  //     if (!posts || !posts.length) {
  //       displayEmpty();
  //     }
  //     else {
  //       initializeRows();
  //     }
  //   });
  // }
  // getPosts();
  // InitializeRows handles appending all of our constructed post HTML inside
  // blogContainer
  // function initializeRows() {
  //   blogContainer.empty();
  //   var postsToAdd = [];
  //   for (var i = 0; i < posts.length; i++) {
  //     postsToAdd.push(createNewRow(posts[i]));
  //   }
  //   blogContainer.append(postsToAdd);
  // }

  // function displayEmpty() {
  //   blogContainer.empty();
  //   var messageH2 = $("<h2>");
  //   messageH2.css({ "text-align": "center", "margin-top": "50px" });
  //   messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
  //   blogContainer.append(messageH2);
  // }
  // app.get("/api/posts/", function(req, res) {
  //   db.Burger.findAll({})
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });


  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    // var newDevoured = $(this).data("newDevoured");

    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
        console.log("changed Devoured to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delCat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted id ", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
