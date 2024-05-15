document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".header");
    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var tabName = this.getAttribute("data-tab");
            var tabs = document.querySelectorAll(".tab-content");
            tabs.forEach(function(tab) {
                tab.classList.remove("active");
            });
            document.querySelector("." + tabName).classList.add("active");

            // Update header colors based on active tab
            headers.forEach(function(h) {
                if (h.getAttribute("data-tab") === tabName) {
                    h.classList.add("active");
                } else {
                    h.classList.remove("active");
                }
            });
        });
    });
});
