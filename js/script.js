$(document).ready(function() {

    var default_grid_size = 16;
    var size = default_grid_size;

    addGrid(size);
    $("#btn_size_sbmt").click(function() {
        var user_size_string = $("#grid_size_text").val();
        var user_size_int = parseInt($("#grid_size_text").val());
        if (isNaN(user_size_int)) {
            alert(user_size_string + " is not a valid number! Try Again!");
            console.log(user_size_int);
        }else if(user_size_string.indexOf(' ') >= 0){
          alert("Value cannot contain spaces");
        } else {
            clearGrid();
            size = user_size_int;
            addGrid(size);
            draw("black");
        }
    });
    draw("black");
}); //End Document Ready
var block_size;

/*
function addGrid(size) {
    for (i = 1; i <= size * size; i++) {
        $('<div></div>').addClass("grid").css({
            "width": setSize(size),
            "height": setSize(size)
        }).appendTo(".sketchpad");
    }
}
*/

var node = "";
function addGrid(size) {
    for (i = 1; i <= size * size; i++) {
     node += "<div class='grid' style='width:" + setSize(size) + 'px;' + "height:" + setSize(size) + "px';></div>";
    }
    $(".sketchpad").append(node);
    console.log(node);
}


function setSize(size) {
    var container_size = parseInt($(".sketchpad").css("width"));
    var block_size = (container_size / size - (4));
    return block_size;
}

function draw(color) {
    $(".grid").mouseenter(function() {
        $(this).css("background-color", color);
    });
}

function clearGrid() {
    $(".sketchpad").empty();
}
