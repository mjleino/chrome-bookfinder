var bookfinderUrl = "http://www.bookfinder.com/search/?keywords=%s&st=xl&ac=qr";

function openBookFinderTab(info, tab) {
	chrome.tabs.create({
		"url":		bookfinderUrl.replace("%s", info.selectionText),
		"index":	tab.index
	});
}

var id = chrome.contextMenus.create({
	"title": 	"Search BookFinder.com for '%s'",
	"contexts": ["selection"],
	"onclick": 	openBookFinderTab
});