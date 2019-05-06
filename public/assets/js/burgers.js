$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: 0
    };

    console.log(newBurger)

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".devourBurger").on("click", function(event) {
    var id = $(this).data("id");

    var newCustomer = {
      // name: $("#customer").val().trim(),
      burger_id: id
    };

    $.ajax("/api/customers", {
      type: "POST",
      data: newCustomer
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".removeBurger").on("click", function(event) {
    var id = $(this).data("id");

    console.log(id)

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });

});