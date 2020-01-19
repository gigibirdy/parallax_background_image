window.addEventListener("scroll", function(e) {
    // Fill logic here
    var y = window.visualViewport.pageTop
    var windowHeight = window.visualViewport.height
    var documentHeight = document.documentElement.scrollHeight;
    var change = (y/(documentHeight - windowHeight)).toFixed(2)*100;
    document.getElementById('imgDiv').style.backgroundPosition = `50% ${change}%`;
}, false);
