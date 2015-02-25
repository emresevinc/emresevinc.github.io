$(document).ready(function () {
	$('#test').rssfeed('http://donanimhaber.com/rss/tum/',{
		snippet: false
	}, function(e) {
		$(e).find('div.rssBody').vTicker({
			showItems: 4			
		});
	});
	
	$('#test2').rssfeed('http://servis.chip.com.tr/chiponline-makale.xml',{
		snippet: false
	}, function(e) {
		$(e).find('div.rssBody').vTicker({
			showItems: 4			
		});
	});
	
	$('#test3').rssfeed('http://feeds.bbci.co.uk/news/rss.xml',{
		snippet: false
	}, function(e) {
		$(e).find('div.rssBody').vTicker({
			showItems: 4			
		});
	});
	
	$('#test4').rssfeed('http://thenextweb.com/feed/?token=116910',{
		snippet: false
	}, function(e) {
		$(e).find('div.rssBody').vTicker({
			showItems: 4			
		});
	});
});