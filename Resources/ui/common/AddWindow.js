Ti.include(Titanium.Filesystem.resourcesDirectory + "helpers/apiHelper.js");
Ti.include(Titanium.Filesystem.resourcesDirectory + "constants/appConstants.js");
var globals = require('globals').Globals;
var styles = require('globals').Styles;
var data = require('globals').Notes;

exports.AddWindow = function() {
	var self = Ti.UI.createWindow({
		modal: true,
		title: 'Add Item',
		backgroundColor: '#fff'
	});
	var itemField = Ti.UI.createTextField({
		width: '300dp',
		height: '45dp',
		top: '20dp',
		hintText: 'New Item',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		returnKeyType: Ti.UI.RETURNKEY_DONE
	});
	var notesField = Ti.UI.createTextField({
		width: '300dp',
		height: '45dp',
		top: '80dp',
		hintText: 'Notes',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		returnKeyType: Ti.UI.RETURNKEY_DONE
	});
	var addButton = Ti.UI.createButton({
		title: 'Add',
		width: '300dp',
		height: '40dp',
		top: '140dp'
	});
	addButton.addEventListener('click', function() {
		addTask(itemField.value, notesField.value, self);
	});
	
	var cancelButton = Ti.UI.createButton({
		title: 'Cancel',
		width: '300dp',
		height: '40dp',
		top: '190dp'
	});
	cancelButton.addEventListener('click', function(e) {
		self.close();
	});
	
	self.add(itemField);
	self.add(notesField);
	self.add(addButton);
	self.add(cancelButton);
	
	return self;
};

var addTask = function(name, note, win) {
	if (name === '') {
		alert('Please enter a task first');
		return;	
	}
	
	data.result.push(
			{
				"title": name,
				"notes": note,
				"creation": "15:13:45 8 July 2013",
				"complete": "no",
				"priority": "medium",
				"reminder": "11:00:00 20 July 2013",
				"repeat": "every day"
			}
		);
	Ti.App.fireEvent('app:updateTables');
	win.close();
};