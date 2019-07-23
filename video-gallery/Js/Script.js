$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

$(".vid").on("click" , function () {
    let vidtxt = $(this).children("img").data("text");
    let vidsrc = $(this).children("img").data("src");
    $("#myModalLabel").html(vidtxt);
    $("#video1").attr("src" , vidsrc);
});

$(function(){
    $('#myModal').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });
});