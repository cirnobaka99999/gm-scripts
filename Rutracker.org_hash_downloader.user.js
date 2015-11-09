// ==UserScript==
// @name        Rutracker.org hash downloader 
// @version     1.0.1
// @namespace   http://vk.com/seiya_loveless?#Rutracker.org_hash_downloader.user.js
// @description Download torrent from rutracker.org via hash
// @include     http://rutracker.org/forum/viewtopic.php?t=*
// @include     http://rutracker.org/forum/viewtopic.php?p=*
// @grant       none
// @icon        http://static.rutracker.org/favicon.ico
// @homepage    https://github.com/seiya-dev/gm-scripts
// @updateURL   https://github.com/seiya-dev/gm-scripts/raw/master/Rutracker.org_hash_downloader.user.js
// @downloadURL https://github.com/seiya-dev/gm-scripts/raw/master/Rutracker.org_hash_downloader.user.js
// ==/UserScript==

$(function(){
	if( $('#tor-hash').text() != '' ){
		var hash = {};
		hash.string = $('#tor-hash').text();
		hash.title = $('#topic-title').text();
		hash.uri  = 'magnet:?xt=urn:btih:'+hash.string;
			hash.uri += '&tr='+encodeURIComponent('http://bt.rutracker.cc/ann');
			hash.uri += '&tr='+encodeURIComponent('http://bt2.rutracker.cc/ann');
			hash.uri += '&tr='+encodeURIComponent('http://bt3.rutracker.cc/ann');
			hash.uri += '&tr='+encodeURIComponent('http://bt4.rutracker.cc/ann');
			hash.uri += '&tr='+encodeURIComponent('udp://tracker.openbittorrent.com:80/announce');
			hash.uri += '&tr='+encodeURIComponent('udp://tracker.publicbt.com:80/announce');
			hash.uri += '&tr='+encodeURIComponent('udp://open.demonii.com:1337/announce');
			hash.uri += '&dn='+encodeURIComponent(hash.title);
		hash.html = '<a class="med" href="'+hash.uri+'">'+hash.string+'</a>';
		$('#tor-hash').html(hash.html);
	}
});
