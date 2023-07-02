var coll = document.getElementsByClassName("section-title");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
    content.style.display = "block";
    } else {
    content.style.display = "none";
    }
});
}

var coll2 = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll2.length; i++) {
coll2[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
});
}

var steps = document.getElementsByClassName("regular-checkbox");

for (i = 0; i<steps.length; i++) {
    steps[i].addEventListener("click", function() {
        var time_block = this.nextElementSibling;
        time_block.innerHTML = Date();
    })
}

function downloadHTML() {
    // Get the current page's HTML content
    var htmlContent = '<html>\r\n' + document.documentElement.innerHTML + '\r\n</html>';

    // Create a Blob object from the HTML content
    var blob = new Blob([htmlContent], { type: 'text/html' });

    // Create a link element
    var link = document.createElement('a');

    // Set the href of the link to be the URL of the Blob object
    link.href = URL.createObjectURL(blob);

    // Set the download attribute of the link to be the desired filename
    link.download = 'copy.html';

    // Append the link to the body
    document.body.appendChild(link);

    // Simulate a click on the link
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
}