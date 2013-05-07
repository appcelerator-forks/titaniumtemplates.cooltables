function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup({navBarHidden: (Titanium.Platform.Android) ? true : false});
	
	//create app tabs
	var win1 = new Window(L('home')),
		win2 = new Window(L('about'));
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('about'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;
	