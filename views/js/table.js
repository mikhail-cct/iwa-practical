function draw_table(){
    $("#results").empty();
    $.getHTMLuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
            }
        });

    };
    $.getHTMLuncached("/get/html");
}


function append(){
    $.ajax({
        type: "POST",
        url: '/post/json',
        dataType: 'json',
        contentType: 'application/json',
        data: '{"sec_n": "0", "item":"Coffee", "price":"3"}',
        async: false,
        success: draw_table()
    })
};


$(document).ready(function(){
    draw_table();
})