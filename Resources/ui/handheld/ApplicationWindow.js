function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('tweetzWindow'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		var TweetzTable = require('/ui/common/TweetzTable');
		self.containingTab.open(new TweetzTable());
	});
	
	return self;
};

module.exports = ApplicationWindow;
