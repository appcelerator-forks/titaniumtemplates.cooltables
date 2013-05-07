Ti.include(Titanium.Filesystem.resourcesDirectory + "helpers/apiHelper.js");
var globals = require('globals').Globals;
var styles = require('globals').Styles;
var data = require('globals').Data;

function TweetzTable(Window) {

	var self = Ti.UI.createWindow({
		title:L('tweetzTable'),
		backgroundColor:'white'
	});
	
	var indicator = Ti.UI.createActivityIndicator({
		style : Ti.UI.iPhone.ActivityIndicatorStyle.BIG
	});
	
	self.add(indicator);
	indicator.show();

	// DATA WILL BE POPULATED WHEN THE WINDOW WILL BE OPENED NOT WHEN REQUIRED
	self.addEventListener('open', function(e) {
		var table = create_Table();
		var tableRows = [];
		
		tableRows.push(createHeader());
		
		for (var i = 0; i < data.result.length; i++) {
			tableRows.push(createCustomLayout(data.result[i]));
		};
		tableRows.push(createFooter());
		table.setData(tableRows);
		self.add(table);
		indicator.hide();	
	});
	
	return self;
}

function create_Table() {
	var table = Ti.UI.createTableView({
		showVerticalScrollIndicator : false,
		height : 'auto',
		backgroundColor : 'transparent',
		separatorColor : 'transparent',
	});

	return table;
}

function createCustomLayout(userInfo) {
	var row = Ti.UI.createTableViewRow({
		height : 'auto',
		//backgroundColor : styles.table_row.backgroundColor,
		// selectedBackgroundColor : styles.table_row.selectedBackgroundColor,
		userInfo : userInfo,
		selectedBackgroundColor : 'transparent',
		backgroundColor: '#ffffff',
		selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
		
	});

	// row.addEventListener('click', function(e) {
		// // Titanium.API.info("You clicked the row.");
	// });
	
	var outer = Ti.UI.createView({
		height : Ti.UI.SIZE,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	});
	
	row.addEventListener('touchstart', function(e) {
		outer.backgroundColor = '#34bd31';
		inner.backgroundColor = '#fafafa';
	});
	
	row.addEventListener('touchend', function(e) {
		outer.backgroundColor = 'transparent';
		inner.backgroundColor = 'transparent';
	});
	
	row.addEventListener('touchcancel', function(e) {
		outer.backgroundColor = 'transparent';
		inner.backgroundColor = 'transparent';
	});
	
	row.add(outer);
	
	var inner = Ti.UI.createView({
		height : Ti.UI.SIZE,
		top : 0,
		left : 5,
		right : 0,
		bottom : 0,
		backgroundColor : 'transparent'
	})
	
	outer.add(inner);

	var Outer_Container = Ti.UI.createView({
		height : Ti.UI.SIZE,
		top : 15,
		right : 30,
		left : 25,
		bottom : 15,
		layout : 'vertical'
	});

	inner.add(Outer_Container);

	var lbl_msg = Ti.UI.createLabel({
		left: 0,
		text : userInfo.msg,
		color : styles.table_row_title.color,
		font : styles.table_row_title.font
	});
	Outer_Container.add(lbl_msg);

	var lbl_stamp = Ti.UI.createLabel({
		text : userInfo.stamp,
		color : styles.table_row_teaser.color,
		font : styles.table_row_teaser.font,
		left: 0,
	});
	Outer_Container.add(lbl_stamp);

	return row;
}

function createHeader(){
	var row = Ti.UI.createTableViewRow({
		height : 'auto',
		selectedBackgroundColor : 'ffffff',
		backgroundColor: '#ffffff',
		selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
	});

	var outer = Ti.UI.createView({
		height: Ti.UI.SIZE,
		backgroundColor: '#ffffff'
	});
	
	row.add(outer);
	
	var inner = Ti.UI.createView({
		top: 30,
		right: 30,
		bottom: 30,
		left: 30,
		height: 60,
		backgroundColor: '#24b4ff'
	});
	outer.add(inner);
	
	var logo = Ti.UI.createView({
		top: 0,
		left: 0,
		width: 60,
		height: 60,
		backgroundColor: '#06a1f1',
		backgroundImage: 'images/twitter.png'
	});
	
	inner.add(logo);
	
	var title = Ti.UI.createLabel({
		text : 'Tweetz',
		left: logo.toImage.width + 10,
		top: 5,
		color: '#ffffff',
		font : {
			fontSize : 24
		}
	});
	
	inner.add(title);
	
	var slogan = Ti.UI.createLabel({
		text : 'My twitter feed',
		left: logo.toImage.width + 10,
		bottom:  10,
		color: '#ffffff',
		font : {
			fontSize : 14
		}
	});
	
	inner.add(slogan);
	
	return row;
}

function createFooter(){
	var row = Ti.UI.createTableViewRow({
		height : 'auto',
		selectedBackgroundColor : 'ffffff',
		backgroundColor: '#ffffff',
		selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
	});

	var outer = Ti.UI.createView({
		height: Ti.UI.SIZE,
		backgroundColor: '#ffffff'
	});
	
	row.add(outer);
	
	var inner = Ti.UI.createView({
		height: Ti.UI.SIZE,
		top: 30,
		right: 30,
		bottom: 30,
		left: 30,
		backgroundColor: '#ffffff',
		layout: 'horizontal'
	});
	outer.add(inner);
	
	var lbl = Ti.UI.createLabel({
		text : 'Follow me ',
		left: 0,
		top: 0,
		color: '#888888',
		font : {
			fontSize : 14
		}
	});
	
	inner.add(lbl);
	
	var user = Ti.UI.createLabel({
		text : '@skounis',
		left: lbl.toImage.width,
		color: '#ff2a2a',
		font : {
			fontSize : 14
		}
	});
	
	inner.add(user);
	
	return row;
}

module.exports = TweetzTable;
