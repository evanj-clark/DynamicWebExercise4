window.onload = init;

function init(){
	var xhr = new XMLHttpRequest();

	xhr.open("GET","https://picsum.photos/list",true)

	xhr.send(null);

	xhr.onload = function() {

		if(xhr.status == 200){
			var picsum = JSON.parse(xhr.responseText)
			console.log(picsum);

			var imageString = "";
		
			for(var x = 540; x<550; x++){
				imageString += "<img src='https://picsum.photos/380/380?image=" + picsum[x].id + "'> "+picsum[x].author+'<br>'+'<a href="'+picsum[x].post_url+'">View Image</a>';
				
			}
			


			document.getElementById("gallery").innerHTML = imageString;
			
	}

}

}