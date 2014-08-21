$(function(){
  $("#add_link").on("click", function(){
    $("#new_text").show()
  })
  $("#new_text input").on("blur keyup", function(e){
    if(this.value.length != 0 && (e.which == 13 || e.which == 0)) {
      $("#list").append("<li><a href='#nil'>" + this.value + "</a></li>");
      $("#new_text").hide();
      this.value = "";
    }
  })

  $("#list").on("click", "a", function(){
    alert(this.text)
  })
})