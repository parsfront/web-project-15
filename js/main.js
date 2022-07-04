let index = 0;
const items = $(".work-item").length;

$(document).ready(function () {
    $(".work-item-inner").click(function () {
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass("open");
        lightBoxSlideShow();
    });

    $(".lightbox-control .prev").click(function () {
        if (index == 0) {
            index = items - 1;
        } else {
            index--;
        }
        lightBoxSlideShow();
    });

    $(".lightbox-control .next").click(function () {
        if (index == items - 1) {
            index = 0;
        } else {
            index++;
        }
        lightBoxSlideShow();
    });

    $(".close").click(function () {
        $(".lightbox").removeClass("open");
    });

    $(".lightbox").click(function (event) {
        if ($(event.target).hasClass("lightbox")) {
            $(this).removeClass("open");
        }
    });

    function lightBoxSlideShow() {
        const imgSrc = $(".work-item").eq(index).find("img").attr("data-target");
        const category = $(".work-item").eq(index).find("p").html();

        $(".lightbox-img").attr("src", imgSrc);
        $(".lightbox-category").html(category);
        $(".lightbox-counter").html(items + "/" + (index + 1));
    }
});
