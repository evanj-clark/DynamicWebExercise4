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
			for(var x = 500; x<550; x++){
				imageString += "<img src='https://picsum.photos/200/300?image=" + picsum[x].id + "'>";
			}


			document.getElementById("gallery").innerHTML = imageString;
	}
}
}