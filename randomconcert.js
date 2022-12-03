
var images = new Array; 
var names = new Array; 
var ingredients = new Array; 
var recipes = new Array; 

images[0] = "synesthesia.jpg"; 
	names[0] = "Synesthesia"; 
	
images[1] = "springfest.jpg"; 
	names[1] = "SpringFest"
	
images[2] = "houseshow.jpg"; 
	names[2] = "Houseshow"
	
images[3] = "kingmala.jpg"; 
	names[3] = "King Mala"
	



// Put all jQuery in this block
$(document).ready(function(){
	// When the user clicks the generate button... 
	$("#generate").on("click", function(){
		// Set borders all to none
		$(".thumb").css("border", "none");
		// Get a random Thumbnail 
		temp = Math.floor(Math.random()*4); 
		// Update the main photo to match that 
		$("#main-photo img").attr("src", images[temp]); 

		// Highlight the thumbnail chosen with a border
		for(i=0; i < 4; i++){ // Loop through all the thumbnails 
			// if the source matches the source of the main 
			if(images[i] == $("#main-photo img").attr("src")){
				highlighted = $(".thumb").get(i); // get the matched thumbnail 
				$(highlighted).css("border", "3px solid #403A34"); // add border 
			}
		}
	
	}); 
	

	

}); 