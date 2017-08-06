setInterval(function(){
			updateChat();
		}, 500);
		
function updateChat(){
	$.ajax({		
		url:'db.php',
		type:'POST',
		data:'chatUpdate=chat',
		success:function(response)
		{
			$("#messages").html(response);
		}	
	});
}	
function sendajax(){
	var chatText = $("#chatbox").val();
	$("#chatbox").val(" "); //clear the content of the chatbox after clickiing send
	$.ajax({		
		url:'db.php',
		type:'POST',
		data:'chat='+ chatText,
		success:function(response)
			{
			//App doesn't output anything to the user
			}		
		});
}