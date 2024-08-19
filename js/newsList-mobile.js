let filterBtn = document.querySelectorAll(".filterBtn")
filterBtn[0].classList.add("activeList")
filterBtn.forEach(element => {
    element.addEventListener("click" , function (params) {
        
        $(".filterBtn").removeClass("activeList")
        element.classList.add("activeList")
    })
});



$(document).ready(function () {
    $(".filterBtn").click(function (e) {
        var url4 = $(this).attr("data-project");
        $(".newsContainer").load(url4);
    });
});