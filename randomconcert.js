
var images = new Array; 
var names = new Array; 
var when = new Array; 
var where = new Array; 
var notes=new Array;

images[0] = "synesthesia.jpg"; 
	names[0] = "Synesthesia"; 
	when[0]="TBD";
	where[0]="September 24th @ 9pm";
	notes[0]="Get ready to dance!";

images[1] = "springfest.jpg"; 
	names[1] = "SpringFest";
	when[1]= "December 8th @ 7pm";
	where[1]="The Quad";
	notes[1]="See USC Concerts page for more details";
	
images[2] = "houseshow.jpg"; 
	names[2] = "Houseshow";
	when[2]= "October 22nd @ 8pm";
	where[2]="138 N. San Fernando Rd.";
	notes[2]="Need a break from school? We got you covered.";
	
images[3] = "kingmala.jpg"; 
	names[3] = "King Mala";
	when[3]= "December 20th @ 7pm";
	where[3]="1143 W 29th St.";
	notes[3]="Tell your friends!";
	



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

		html = "<h1 id='title'>" + names[temp] + "</h1>"
		html += "<h2 id='when'>When: "+ when[temp] + "</h2>"; 
		html += "<h2 id='where'>Where: " + where[temp] + "</h2>"; 
		html += "<p id='notes'>Notes: " + notes[temp] + "</p>"; 
		$("#info").html(html); 
		

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