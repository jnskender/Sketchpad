$(document).ready(function() {

    var default_grid_size = 16;
    var size = default_grid_size;


    addGrid(size);
    draw("black");
    $("#btn_size_sbmt").click(function() {
        $(".grid").remove();
        changeSize();
    });
    $("#btn_clear_sbmt").click(function() {
        $(".grid").css("background-color", "white");
    });
}); //End Document Ready
var block_size;

function addGrid(size) {
  var node = "";
    for (i = 1; i <= size * size; i++) {
        node += "<div class='grid' style='width:" + setSize(size) +
            'px;' + "height:" + setSize(size) + "px';></div>";
    }
    $(".sketchpad").append(node);
}


function setSize(size) {
    var container_size = parseInt($(".sketchpad").css("width"));
    var block_size = (container_size / size - (4));
    return block_size;
}

function draw(color) {
    var rgb_value = "rgb(" + randomColor() +","+ randomColor() +","+ randomColor() +")";
    $(".grid").mouseenter(function() {
        $(this).css("background-color", rgb_value);
    });
}

function changeSize() {
    var user_size_string = prompt("Enter Grid Size: ");
    var user_size_int = parseInt(user_size_string);
    if (isNaN(user_size_int)) {
        alert(user_size_string + " is not a valid number! Try Again!");
        console.log(user_size_int);
    } else if (user_size_string.indexOf(' ') >= 0) {
        alert("Value cannot contain spaces");
    } else {
        size = user_size_int;
        addGrid(size);
        draw("black");
    }
}

function randomColor(){
  return Math.floor((Math.random() * 255) + 1);
}
