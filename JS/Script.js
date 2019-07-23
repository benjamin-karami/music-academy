$(".violin-card").on("click", function() {
  $(".back-btn").removeClass("d-none");
  $(".note-selection").addClass("d-none");
  $(".violin-note-section").removeClass("d-none");
  $(".note-section-header").html("نُت‌های موسیقی ویولن");
});

$(".piano-card").on("click", function() {
  $(".back-btn").removeClass("d-none");
  $(".note-selection").addClass("d-none");
  $(".piano-note-section").removeClass("d-none");
  $(".note-section-header").html("نُت‌های موسیقی پیانو");
});

$(".back-btn").on("click", function() {
  $(".back-btn").addClass("d-none");
  $(".note-selection").removeClass("d-none");
  $(".piano-note-section, .violin-note-section").addClass("d-none");
  $(".note-section-header").html("نُت‌های موسیقی");
});

$('a[href^="#"]').on("click", function(event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        700
      );
  }
});
