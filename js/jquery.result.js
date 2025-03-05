/*
Author: Caleb Bronn
Last Update: 20 Feb 2025

Writes html content to CSSTechnique/index.html because I couldn't get .load() to work.
We use javascript to insert this code because we reuse the exact same html code multiple times,
and it just gets really cluttered to try and search through the whole thing when you're writing.

Plus, this way the images are only loaded once the DOM has finished loading, which improves site 
load speeds and usability.
*/

var gallery =
	'<div class="gallery">' +
	'<div class="col">' +
	'<img src="https://picsum.photos/720/621" alt="Lorum Picsum Image">' +
	'<img src="https://picsum.photos/938/956" alt="Lorum Picsum Image">' +
	'<img src="https://picsum.photos/635/784" alt="Lorum Picsum Image">' +
	'</div>' +
	'<div class="col">' +
	'<img src="https://picsum.photos/793/640" alt="Lorum Picsum Image">' +
	'<img src="https://picsum.photos/783/626" alt="Lorum Picsum Image">' +
	'<img src="https://picsum.photos/843/1000" alt="Lorum Picsum Image">' +
	'</div>' +
	'<div class="col">' +
	'<img src="https://picsum.photos/913/978" alt="Lorum Picsum Image">' +
	'<img src="https://picsum.photos/666/668" alt="Lorum Picsum Image">' +
	'<img src="https://picsum.photos/904/747" alt="Lorum Picsum Image">' +
	'</div>' +
	'<div class="col">' +
	'<img src="https://picsum.photos/858/998" alt="Lorum Picsum Image">' +
	'<img src="https://picsum.photos/875/694" alt="Lorum Picsum Image">' +
	'<img src="https://picsum.photos/642/922" alt="Lorum Picsum Image">' +
	'</div>' +
	'</div>';

//! This code doesn't work for some reason????
// $(document).ready(function() {
// 	$(".result").load("materials/include.html");
// });


var url = window.location.href;

// Main
$(document).ready(function() {
	// If the URL does not have "#step" in it, highlight the first link by default
	if (url[url.search("#step")] != "#") {
		$("nav li:first-child a").addClass("current");
	} else {
	// Otherwise, highlight the <a> which has the id indicated by the URL
		$("nav a").each(function () {
			if (this.href == url) {
				$(this).addClass("current");
			}
		});
	}

	// Insert gallery code
	$(".result").append(gallery);

	// Change which navbar link is highlighted when the user clicks one of the links
	$("nav a").click(function (e) {
		$(".current").removeClass("current");
		$(this).addClass("current");
	});
});
