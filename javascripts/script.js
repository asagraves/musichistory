define(["jquery", "logsong"], function($, logsong){
	$("#addmusic").click(function(){
		$("#inputmusic").show()
		$("#parentdiv").hide()
		$("#div-2").hide()
	});

	$("#viewmusic").click(function(){
		$("#inputmusic").hide()
		$("#parentdiv").show()
		$("#div-2").show()
	})

  $("#button1").click(logsong.addSongToList);
  
});











