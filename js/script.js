$(document).ready(function() {

    var default_grid_size = 16;

    var size = default_grid_size;

    addGrid(size);
    $("#btn_sbmt").click(function() {
        var user_size = parseInt($("#grid_size_text").val());
        if (isNaN(user_size)) {
            alert(user_size + " is not a valid number! Try Again!");
            console.log(user_size);
        } else {
            clearGrid();
            size = user_size;
            addGrid(size);
            draw("black");
        }
    });
    draw("black");
}); //End Document Ready
var block_size;

function addGrid(size) {
    for (i = 1; i <= size * size; i++) {
        $('<div></div>').addClass("grid").css({
            "width": setSize(size),
            "height": setSize(size)
        }).appendTo(".sketchpad");
    }
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
