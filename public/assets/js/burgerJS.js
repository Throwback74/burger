$( document ).ready(function() {
  document.body.style.zoom="150%";
  document.body.style.zIndex=-9000;
  // $(".btn-danger").css("z-index", 9000);
  // $(".btm").show();
  // $(".add-btn").show();
  $(".container").append(
  `<div class="container btm">
  <div class="row">
      <div class="col-md-12" id="add-burger">
        
        <form class="add-burger" action="/api/burgers" method="POST">
          <div class="form-group">
            <input type="text" name="burger_name" class="form-control" id="burger-input" placeholder="Enter a burger you want to eat here!">
          </div>
          <button type="submit" class="btn btn-danger add-btn">Add Burger</button>
        </form>
      </div>
    </div>
</div>`
);
});

