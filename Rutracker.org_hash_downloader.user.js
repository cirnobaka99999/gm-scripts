// ==UserScript==
// @name        Rutracker.org hash downloader 
// @version     0.6
// @namespace   http://vk.com/seiya_loveless?#Rutracker.org_hash_downloader.user.js
// @description Download torrent from rutracker.org via hash
// @include     http://rutracker.org/forum/viewtopic.php?t=*
// @grant       none
// @icon        http://static.rutracker.org/favicon.ico
// @homepage    https://github.com/seiya-dev/gm-scripts
// @updateURL   https://github.com/seiya-dev/gm-scripts/raw/master/Rutracker.org_hash_downloader.user.js
// @downloadURL https://github.com/seiya-dev/gm-scripts/raw/master/Rutracker.org_hash_downloader.user.js
// ==/UserScript==

$(function(){
	if( $('#tor-hash').text() != '' ){
		var hash_string = $('#tor-hash').text();
		var hash_topic_title = $('#topic-title').text();
		var hash_uri  = 'magnet:?xt=urn:btih:'+hash_string+'&dn='+encodeURIComponent(hash_topic_title);
			hash_uri += '&tr='+encodeURIComponent('udp://tracker.openbittorrent.com:80/announce');
			hash_uri += '&tr='+encodeURIComponent('udp://tracker.publicbt.com:80/announce');
			hash_uri += '&tr='+encodeURIComponent('udp://open.demonii.com:1337/announce');
		var hash_output_new = '<a class="med" href="'+hash_uri+'">'+hash_string+'</a>';
		$('#tor-hash').html(hash_output_new);
	}
});
