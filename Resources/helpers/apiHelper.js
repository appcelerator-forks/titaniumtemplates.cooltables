function APIGetRequest(url, callback, errorCallback) {
	var req = Titanium.Network.createHTTPClient({
		onload : callback,
		onerror : errorCallback,
		timeout : 60000
	});
	req.open("GET", url, true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.send();
}