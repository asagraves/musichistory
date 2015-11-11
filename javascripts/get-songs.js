define(["jquery"], function($){
	return {
		getSongs : function (cb) {
			$.ajax({
				url: "https://scorching-torch-9452.firebaseio.com/.json"
  			}).done(cb);
		}
	};
});