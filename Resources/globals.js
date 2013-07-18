Ti.include(Titanium.Filesystem.resourcesDirectory + "constants/appConstants.js");

exports.Globals = {
	news : {
		url : 'http://skounis.s3.amazonaws.com/mobile-apps/barebone/news.json'
	}

};

exports.Styles = {

	// Windows / Views
	win : {
		backgroundColor : '#232323',
		barColor : '#232323'
	},

	// Feed (eg: News view)
	table : {

	},

	table_row : {
		marginTop: 10,
		marginRight: 10,
		marginBottom: 10,
		marginLeft: 10,
		backgroundColor : 'transparent',
		selectedBackgroundColor : '#8c5e7a',
	},

	table_row_title : {
		color : '#999999',
		font : {
			fontSize : 14 * dp,
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		}
	},

	table_row_teaser : {
		font : {
			fontSize : 12 * dp,
			fontFamily : 'Montserrat',
			fontWeight : 'Regular'
		},
		color : '#555555'
	}

};

exports.Data = { 
	"result": [
		{
			"msg": "Experience more with expanded Tweets http://t.co/8gH7sqUE",
			"stamp": "18 hours ago"
		}, {
			"msg": "Tailored Trends bring you closer http://t.co/ppv0hqF2",
			"stamp": "03 Nov 2012"
		}, {
			"msg": "Our new nest. http://t.co/6Ugo6xbA",
			"stamp": "28 Oct 2012"
		}, {
			"msg": "Twitter & @NASCAR are taking you to the Pocono 400 with http://t.co/0bLmhiUn. Read more: http://t.co/lHqQUIjl",
			"stamp": "7 June 2012"
		}, {
			"msg": "Proin posuere tempor facilisis. Aenean tempus dolor ut nunc bibendum sit  http://t.co/0bLmhiUn. Amet volutpat mauris ullamcorper with",
			"stamp": "7 June 2012"
		}, {
			"msg": "TSed id sodales libero. In hac habitasse platea dictumst http://t.co/lHqQUIjl",
			"stamp": "7 May 2012"
		}, {
			"msg": "http://t.co/0bLmhiUn.In egestas mi vitae tortor consectetur tincidunt",
			"stamp": "17 April 2012"
		}
	]
}

exports.Notes = {
	"result": [
		{
			"title": "Milk",
			"notes": "Full Fat",
			"creation": "15:13:45 8 July 2013",
			"complete": "no",
			"priority": "medium",
			"reminder": "11:00:00 20 July 2013",
			"repeat": "every day"
		}, {
			"title": "Oil Change",
			"notes": "Mobil1",
			"creation": "11:20:45 4 July 2013",
			"complete": "yes",
			"priority": "high",
			"reminder": "12:00:00 10 July 2013",
			"repeat": "no"
		}, {
			"title": "Phone Bill",
			"notes": "60$",
			"creation": "15:13:45 8 July 2012",
			"complete": "no",
			"priority": "high",
			"reminder": "11:00:00 1 August 2012",
			"repeat": "no"
		}, {
			"title": "Rent",
			"notes": "400$",
			"creation": "15:13:45 8 April 2012",
			"complete": "yes",
			"priority": "high",
			"reminder": "11:00:00 1 May 2012",
			"repeat": "every month"
		}, {
			"title": "Sync with iTunes",
			"notes": "Nine Inch Nails",
			"creation": "15:13:45 8 July 2013",
			"complete": "yes",
			"priority": "low",
			"reminder": "",
			"repeat": ""
		}
	]
}