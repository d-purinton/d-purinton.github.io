
$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.

function addItem() {
  var text = window.prompt("New Player");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li> <strong>" + text + "</strong> " + delete_link + "</li>");

  var numItems = $("ol li").length; //how many exist right now, not when the page was created; auto updates //
  //YESS IF FUNCTION //
  if (numItems == 1) {
    $(".total").html(numItems + " item")
  }
    else {
      $(".total").html(numItems + " items")
  }
}

// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteItem(event) {
  console.info(event);
  $(event.target).parent().remove();
  var numItems = $("ol li").length; //how many exist right now, not when the page was created; auto updates //
  //YESS IF FUNCTION //
  if (numItems == 1) {
    $(".total").html(numItems + " item")
  }
    else {
      $(".total").html(numItems + " items")
  }

}
