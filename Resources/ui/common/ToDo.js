Ti.include(Titanium.Filesystem.resourcesDirectory + "helpers/apiHelper.js");
Ti.include(Titanium.Filesystem.resourcesDirectory + "constants/appConstants.js");
var globals = require('globals').Globals;
var styles = require('globals').Styles;
var data = require('globals').Notes;

function ToDoList(Window) {

	var self = Ti.UI.createWindow({
		title:L('toDoTable'),
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
		var table = Ti.UI.createTableView({
			showVerticalScrollIndicator : false,
			height : 'auto',
			backgroundColor : 'transparent',
			separatorColor : 'transparent',
		});
		
		var tableRows = [];
		
		tableRows.push(createHeader());
		
		for (var i = 0; i < data.result.length; i++) {
			tableRows.push(createCustomLayout(data.result[i]));
		};
		table.setData(tableRows);
		self.add(table);
		indicator.hide();
		
		Ti.App.addEventListener('app:updateTables', function() {
			
			var tableRows = [];	
				
			tableRows.push(createHeader());	
							
			for (var i = 0; i < data.result.length; i++) {
				tableRows.push(createCustomLayout(data.result[i]));
			};
			
			table.setData(tableRows);
			self.add(table);
			indicator.hide();
		});	
		
	});
	

	
	return self;
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
		backgroundColor : '#ffffff'
	});
	
	row.add(leftbracket);
	
	var checkbox = Ti.UI.createView({
		top: 22 * dp,
		left: 22 * dp,
		height: 16 * dp,
		width: 16 * dp,
		backgroundColor : '#ffffff'
	});
	
	leftbracket.add(checkbox);
	
	if (userInfo.complete == "yes") {
	var checkbox_image = Ti.UI.createImageView({
		image : (Titanium.Platform.Android) ? '/images/checkbox_checked2x.png' : '/images/checkbox_checked.png',
		height : 16 * dp,
		width : 16 * dp
	})
	} else {
	var checkbox_image = Ti.UI.createImageView({
		image : (Titanium.Platform.Android) ? '/images/checkbox_unchecked2x.png' : '/images/checkbox_unchecked.png',
		height : 16 * dp,
		width : 16 * dp
	})
	};
	
	checkbox.add(checkbox_image);

	leftbracket.addEventListener('click', function(e) {
		var i = e.index - 1
		
		if (data.result[i].complete == "no")
		{
			data.result[i].complete = "yes"	
		} else {
			data.result[i].complete = "no"
		};
		
		Ti.App.fireEvent('app:updateTables');
	});
	
	var rightbracket = Ti.UI.createView({
		top : 0,
		right : 0,
		height: 59 * dp,
		width: 32 * dp,
		backgroundColor : '#ffffff'
	})
	
	row.add(rightbracket);
	
	var arrow = Ti.UI.createView({
		top : 22 * dp,
		right : 8 * dp,
		height: 16 * dp,
		width: 16 * dp,
		backgroundColor : '#ffffff'
	})
	
	rightbracket.add(arrow);
	
	var arrow_image = Ti.UI.createImageView({
		image : (Titanium.Platform.Android) ? '/images/arrow2x.png' : '/images/arrow.png',
		height : 16 * dp,
		width : 16 * dp
	})
	
	arrow.add(arrow_image);

	
	var vertlinebracket = Ti.UI.createView({
		left : 60 * dp,
		width: 6 * dp,
		height: 59 * dp,
		backgroundColor : '#ffffff'
	})
	
	row.add(vertlinebracket);
	
	var vertline_image = Ti.UI.createImageView({
		image : '/images/redlines.png',
		height : 59 * dp,
		width : 6 * dp
	})
	
	vertlinebracket.add(vertline_image);

	var separator = Ti.UI.createView({
		top : 59 * dp,
		height: 1 * dp,
		backgroundColor : '#999999'
	})
	
	row.add(separator);
	
	var text_container = Ti.UI.createView({
		left : 71 * dp,
		right : 35 * dp,
		top : 8 * dp,
		bottom : 5 * dp,
		backgroundColor: '#ffffff',
		layout : 'vertical'
		
	})
	
	row.add(text_container);
	
	text_container.addEventListener('click', function(e) {
		
		data.result.push(
			{
				"title": "Sunglasses",
				"notes": "Wayfarers",
				"creation": "15:13:45 8 July 2013",
				"complete": "no",
				"priority": "medium",
				"reminder": "11:00:00 20 July 2013",
				"repeat": "every day"
			}
		);
		Ti.App.fireEvent('app:updateTables');
	});
	
	var lbl_title = Ti.UI.createLabel({
		left: 0,
		text : userInfo.title,
		color : '#555555',
		font : styles.table_row_title.font
	});
	text_container.add(lbl_title);

	var lbl_notes = Ti.UI.createLabel({
		text : userInfo.notes,
		color : '#999999',
		font : styles.table_row_teaser.font,
		left: 0,
	});
	text_container.add(lbl_notes);

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
		image : '/images/todoheader.png',
		height : 44 * dp,
		width : 320 * dp
	});
	
	rippedpage.add(header_image);

	
	
	return row;
}


module.exports = ToDoList;