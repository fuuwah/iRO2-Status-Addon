function refresh() {
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "http://status.niceboat-guild.com/",
		success: function(data) {
			/* Empty the unordered list */
			$("#iRO2").empty();
			/* Loop through the API objects */
			for (var d in data) {
				/* Create a list item node */
				var list_node = document.createElement('li');
				list_node.id = data[d].Name;
				list_node.className = data[d].Status;
				var list_text = document.createTextNode(data[d].Name + ' is ');
				list_node.appendChild(list_text);
				/* Create a status node */
				var status_node = document.createElement('strong');
				var status_text = document.createTextNode(data[d].Status);
				status_node.appendChild(status_text);
				/* Append a status to a list */
				list_node.appendChild(status_node);
				/* Append a list item to the unordered list */
				document.getElementById("iRO2").appendChild(list_node);
			}
		},
		complete: function() {
			/* Loop refresh() every 10 seconds */
			setTimeout(refresh, 10000);
		}
	});
}

refresh();
