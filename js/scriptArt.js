//modal image

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('art');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



for(x=0;x<img.length;x++){
    img[x].onclick = function(){
        modalImg.src = this.src;
        modal.style.display = "block";
        captionText.innerHTML = this.alt;

    }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

