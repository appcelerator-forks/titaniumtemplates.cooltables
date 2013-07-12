Ti.include(Titanium.Filesystem.resourcesDirectory + "helpers/apiHelper.js");
Ti.include(Titanium.Filesystem.resourcesDirectory + "constants/appConstants.js");
var globals = require('globals').Globals;
var styles = require('globals').Styles;
var data = require('globals').Data;

function TweetzTable(Window) {

	var self = Ti.UI.createWindow({
		title:L('tweetzTable'),
		backgroundColor:'white',
		navBarHidden: (Titanium.Platform.Android) ? true : false,
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
		height : 60 * dp,
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
	
	var leftbracket = Ti.UI.createView({
		top: 0,
		left: 0,
		height: 59 * dp,
		width: 60 * dp,
		backgroundColor : '#dbdb36'
	});
	
	row.add(leftbracket);
	
	var checkbox = Ti.UI.createView({
		top: 8,
		left: 8,
		height: 44 * dp,
		width: 44 * dp,
		backgroundColor : '#007f00'
	});
	
	leftbracket.add(checkbox);
	
	var rightbracket = Ti.UI.createView({
		top : 0,
		right : 0,
		height: 59 * dp,
		width: 30 * dp,
		backgroundColor : '#dbdb36'
	})
	
	row.add(rightbracket);
	
	var arrow = Ti.UI.createView({
		top : 8,
		right : 3,
		height: 44 * dp,
		width: 22 * dp,
		backgroundColor : '#007f00'
	})
	
	rightbracket.add(arrow);
	
	var vertlinebracket = Ti.UI.createView({
		left : 60,
		width: 6 * dp,
		height: 59 * dp,
		backgroundColor : '#ff0000'
	})
	
	row.add(vertlinebracket);

	var separator = Ti.UI.createView({
		top : 59,
		height: 1 * dp,
		backgroundColor : '#999999'
	})
	
	row.add(separator);
	// var Outer_Container = Ti.UI.createView({
		// height : Ti.UI.SIZE,
		// top : 15 * dp,
		// right : 30 * dp,
		// left : 25 * dp,
		// bottom : 15 * dp,
		// layout : 'vertical'
	// });
// 
	// inner.add(Outer_Container);
// 
	// var lbl_msg = Ti.UI.createLabel({
		// left: 0,
		// text : userInfo.msg,
		// color : styles.table_row_title.color,
		// font : styles.table_row_title.font
	// });
	// Outer_Container.add(lbl_msg);
// 
	// var lbl_stamp = Ti.UI.createLabel({
		// text : userInfo.stamp,
		// color : styles.table_row_teaser.color,
		// font : styles.table_row_teaser.font,
		// left: 0,
	// });
	// Outer_Container.add(lbl_stamp);

	return row;
}

function createHeader(){
	var row = Ti.UI.createTableViewRow({
		height : 'auto',
		selectedBackgroundColor : 'ffffff',
		backgroundColor: '#ffffff',
		selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
	});


	
	var rippedpage = Ti.UI.createView({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		height: 44 * dp,
		backgroundColor: '#24b4ff'
	});
	row.add(rippedpage);
	
	
	var header_image = Ti.UI.createImageView({
		image : (Titanium.Platform.Android) ? '/images/todoheader@2x.png' : '/images/todoheader.png',
		height : 44 * dp,
		width : 320 * dp
	});
	
	rippedpage.add(header_image);

	
	
	return row;
}


module.exports = TweetzTable;