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
