function refresh() {
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "http://status.niceboat-guild.com/",
		success: function(data) {
			$("#iRO2").empty();
			for (var d in data) {
				$("#iRO2").append(
					'<li class="' + data[d].Name + ' ' + data[d].Status + '">' +
					data[d].Name + ' is <strong>' + data[d].Status + '</strong>.</li>');
			}
		},
		complete: function() {
			setTimeout(refresh, 10000);
		}
	});
}

refresh();
