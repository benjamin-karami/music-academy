$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

$(".img").on("click" , function () {
    $("#Modal-img").attr("src" , $(this).attr("src"))
});
