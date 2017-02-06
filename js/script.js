$(document).ready(function() {

    var default_grid_size = 16;
    var size = default_grid_size;



    addGrid(size); //default size
    draw("black"); //default color

    $("#btn_size_sbmt").click(function() {
        $(".grid").remove();
        changeSize();
    });
    $("#btn_clear_sbmt").click(function() {
        $(".grid").css("background-color", "white");
    });
    $("#btn_change_color_sbmt").click(function() {
        draw();
    });
    $("#btn_grid_toggle").click(function() {
        $('.grid').toggleClass("grid , grid_lines_hidden");
    });
}); //End Document Ready

function addGrid(size) {
    var node = ""; // must initialize node or error: undefined
    for (i = 1; i <= size * size; i++) {
        node += "<div class='grid' style='width:" + setSize(size) +
            'px;' + "height:" + setSize(size) + "px';></div>";
    }
    $(".sketchpad").append(node); //Keeping append outside loop increase speed tenfold
}


function setSize(size) {
    var container_size = parseInt($(".sketchpad").css("width"));
    var block_size = (container_size / size - (4)); //individual block_size
    return block_size;
}

function draw() {
    var color = $("#color_select option:selected").text();
    var rgb_value = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
    if (color === "Random") {
        color = rgb_value;
    }
    $(".grid").mouseenter(function() {
        $(this).css("background-color", color);
    });
}

function changeSize() {
    var user_size_string = prompt("Enter Grid Size: ");
    var user_size_int = parseInt(user_size_string);
    if (isNaN(user_size_int)) { //check for invalid characters
        alert(user_size_string + " is not a valid number! Try Again!");
    } else if (user_size_string.indexOf(' ') >= 0) { //check for spaces
        alert("Value cannot contain spaces");
    } else {
        size = user_size_int;
        addGrid(size);
        draw();
    }
}

function randomColor() {
    return Math.floor((Math.random() * 255)); //creates random number 0 - 255 (255 is limit of RGB Values)
}
