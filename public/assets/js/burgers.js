$(document).ready(function(){
  var burgersVar;
  
  function getTodos() {
    $.get("/api/burgers", function(data) {
      burgerArr = data;
      initializeRows();
    });
  }
  getTodos();

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
      name: $("#burger_name").val().trim(),
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
