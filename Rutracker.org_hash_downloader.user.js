// ==UserScript==
// @name        Rutracker.org hash downloader 
// @version     0.5
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
	if( $('#tor-hash').text() != "" ){
		var hash_string = $('#tor-hash').text();
		var hash_topic_title = $('#topic-title').text();
		var hash_uri = 'magnet:?xt=urn:btih:'+hash_string+'&dn='+encodeURIComponent(hash_topic_title)
			+'&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce';
		var hash_output_new = '<a class="med" href="'+hash_uri+'">'+hash_string+'</a>';
		$('#tor-hash').html(hash_output_new);
	}
});
