function refresh() {
	$.ajax({
		type: "POST",
		url: "http://status.niceboat-guild.com/",
		success: function(data) {
			$("#iRO2").html($(data).find("#iRO2"));
		},
		complete: function() {
			setTimeout(refresh, 10000);
		}
	});
}

refresh();
