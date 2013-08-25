function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		navBarHidden: (Titanium.Platform.Android) ? true : false
	});
	
	var button1 = Ti.UI.createButton({
		height:Ti.UI.SIZE,
		left: 30,
		right: 30,
		title:L('tweetzWindow'),
		top:20
	});
	
	self.add(button1);
	
	var button2 = Ti.UI.createButton({
		height:Ti.UI.SIZE,
		left: 30,
		right: 30,
		title:L('toDoWindow'),
		top:80
	});
	
	self.add(button2);
	
	button1.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		var TweetzTable = require('/ui/common/TweetzTable');
		self.containingTab.open(new TweetzTable());
	});
	
	button2.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		var ToDo = require('/ui/common/ToDo');
		self.containingTab.open(new ToDo());
	});
	
	return self;
};

module.exports = ApplicationWindow;
