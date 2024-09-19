// Initial Setup for viewport buttons and product list
var $viewportButtons = $(".mobile-btn, .tablet-btn, .desktop-btn"),
    $productList = $(".products-list"),
    $body = $("body"),
    $productIframe = $(".product-iframe");

// Purchase Button click handler
$(".purchase-btn").click(function() {
    if ($current_product in $products) {
        var url = 'https://colorlib.com/wp/template/' + $current_product + '/#pricing';
        top.location.href = url;
    }
    return false;
});

// Iframe switcher based on viewport button clicks
$(".desktop-btn").on("click", function() {
    $productIframe.animate({ width: $(window).width() });
    return false;
});
$(".tablet-btn").on("click", function() {
    $productIframe.animate({ width: "768px" });
    return false;
});
$(".mobile-btn").on("click", function() {
    $productIframe.animate({ width: "480px" });
    return false;
});

// CarouFredSel initialization (for product list carousel)
$productList.carouFredSel({
    auto: false,
    circular: false,
    infinite: false,
    mousewheel: true,
    scroll: { items: 1 },
    width: "100%",
    prev: ".products-prev",
    next: ".products-next"
});

// Window resize function to adjust iframe height
function switcher_iframe_height() {
    if ($body.hasClass("toggle")) return;
    var height = $(window).height(),
        switcherHeight = $(".switcher-bar").height() + $(".switcher-body").height(),
        iframeHeight = height - switcherHeight - 2;
    $productIframe.height(iframeHeight);
}

$(document).ready(switcher_iframe_height);
$(window).on("resize load", switcher_iframe_height);

// Load Event
$productIframe.load(function() {
    $(".preloader, .preloading-icon").fadeOut(400);
});

// Product Switcher Toggle
$(".product-switcher a").on("click", function() {
    $body.toggleClass("toggle");
    if (!$body.hasClass("toggle")) {
        setTimeout(switcher_iframe_height, 210);
        setTimeout(switcher_iframe_height, 310);
        setTimeout(switcher_iframe_height, 410);
        setTimeout(switcher_iframe_height, 1500);
        setTimeout(switcher_iframe_height, 2500);
    }
    return false;
});
