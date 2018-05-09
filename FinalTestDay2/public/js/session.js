


 		
function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;             
}



function createClicked(){
//  if ($("#ident").val() == "") {
//    alert("ERROR");
//    return false;
//  }

  $.ajax({
    url: "/sendTeam",
    type: "POST",
    data: {teamName:($("#name").val())},
    success: function(data){
      if (!data)
        alert("ERROR SEND TEAM");
      else if (data.redirect)
		window.location = data.redirect;
	 else
        $('#player').append($('<option>', {
            value: data.teamName,
            text: '' + data.teamName 
          }));
    } ,     
    dataType: "json"
  }); 

  return false;
}



function sportsClicked(){
	console.log($("#player").val());
	$.get("/getTeamList/" + $("#player").val(),function(data){
		if (data.redirect)
			window.location = data.redirect;
		else {
			console.log("+++++++++" + data);

        $("#list").empty();
        // $("#list").append("<li>" + data.player[0].player.FirstName + " " + 
        // data.player[0].player.LastName + " Points = " + data.player[0].stats.Pts['#text'] + "</li>");


	        for (let i=0;i<data.team.length;i++) {
	        	let isRookie = " ";
	        	if(data.team[i].player.IsRookie == "true")
	        		isRookie = "R";
	        	if (data.team[i].player.Height) {
	           		$("#list").append("<li>" + 
	           		data.team[i].player.FirstName + " " + 
	           		data.team[i].player.LastName + " " + 
	           		data.team[i].player.Height + 
	           		" " + isRookie + "</li>");
				}
	        }

		

		}
	});

/*
	$.get("/sports",function(data){

		if (data.redirect)
			window.location = data.redirect;
		else {
			console.log(data);
			$("#list").empty();
	        for (let i=0;i<data.info.length;i++) {
	           $("#list").append("<li>" + data.info[i].player.FirstName + " " + data.info[i].player.LastName + " " + data.info[i].player.Height + "</li>");
	        }		
		}
	});
*/
	return false;             
}


$(document).ready(function(){ 

	$.get("/userInfo",function(data){
		if (data.username)
			$("#session").html("Session " + data.username);
	});

	$.get('/getTeams',function(data){
		console.log(data);
		for (let i=0;i<data.length;i++) {
				$('#player').append($('<option>', {
		            value: data[i].teamName,
		            text: '' + data[i].teamName 
	          	}));
		}
	})

    $("#createButton").click(createClicked);


	$("#logout").click(logoutClicked);
	$("#sports").click(sportsClicked);

});  		
    


