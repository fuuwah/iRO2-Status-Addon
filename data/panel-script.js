function refresh() {
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "http://status.niceboat-guild.com/",
		success: function(data) {
			$("#iRO2").empty();
			for (var d in data) {
				var list_node = document.createElement('li');
				list_node.id = data[d].Name;
				list_node.className = data[d].Status;
				var list_text = document.createTextNode(data[d].Name + ' is ');
				list_node.appendChild(list_text);

				var status_node = document.createElement('strong');
				var status_text = document.createTextNode(data[d].Status);
				status_node.appendChild(status_text);
				list_node.appendChild(status_node);

				document.getElementById("iRO2").appendChild(list_node);
			}
		},
		complete: function() {
			setTimeout(refresh, 10000);
		}
	});
}

refresh();
