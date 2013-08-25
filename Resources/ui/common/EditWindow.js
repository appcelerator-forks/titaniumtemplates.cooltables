Ti.include(Titanium.Filesystem.resourcesDirectory + "helpers/apiHelper.js");
Ti.include(Titanium.Filesystem.resourcesDirectory + "constants/appConstants.js");
var globals = require('globals').Globals;
var styles = require('globals').Styles;
var data = require('globals').Notes;

exports.EditWindow = function(e) {
	var i = e.index - 1;
	var self = Ti.UI.createWindow({
		modal: true,
		title: 'Edit Item',
		backgroundColor: '#fff'
	});
	var itemField = Ti.UI.createTextField({
		width: '300dp',
		height: '45dp',
		top: '20dp',
		hintText: 'Name',
		value: data.result[i].title,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		returnKeyType: Ti.UI.RETURNKEY_DONE
	});
	var notesField = Ti.UI.createTextField({
		width: '300dp',
		height: '45dp',
		top: '80dp',
		hintText: 'Notes',
		value: data.result[i].notes,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		returnKeyType: Ti.UI.RETURNKEY_DONE
	});
	var doneButton = Ti.UI.createButton({
		title: 'Done',
		width: '300dp',
		height: '40dp',
		top: '140dp'
	});
	doneButton.addEventListener('click', function() {
		editTask(itemField.value, notesField.value, self, i);
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
	self.add(doneButton);
	self.add(cancelButton);
	
	return self;
};

var editTask = function(name, note, win, i) {
	if (name === '') {
		alert('Please enter a task first');
		return;	
	}
	
	data.result[i].title = name;
	data.result[i].notes = note;
	Ti.App.fireEvent('app:updateTables');
	win.close();
};