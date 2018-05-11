


 		
function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;             
}


$(document).ready(function(){ 

	$.get("/userInfo",function(data){
		if (data.username)
			$("#session").html("Session " + data.username);
	});

	$.get("/getUsers",function(data)
	{
  		for(let i=0;i<data.length,i++) {
  			if(data[i].username) {
  				$('#users').append("<li>" + data.username + '</li>');
  			}
  		}
	});

	$("#logout").click(logoutClicked);

});  		
    


