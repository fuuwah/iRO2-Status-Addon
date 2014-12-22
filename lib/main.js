var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
	id: "iro2-status-addon",
	label: "iRO2 Status Add-on",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onChange: handleChange
});

var panel = panels.Panel({
	width: 260,
	height: 245,
	contentURL: self.data.url("panel.html"),
	contentScriptFile: [self.data.url("jquery.js"), self.data.url("panel-script.js")],
	onHide: handleHide
});

function handleChange(state) {
	if (state.checked) {
		panel.show({
			position: button
		});
	}
}

function handleHide() {
	button.state('window', {checked: false});
}
