'use strict';

console.log('\'Allo \'Allo! Popup');

/*var id = '56f2fb13d4f5ca1daeafb8c3'
var url = 'https://localhost:5000/doc/' + id + '/most_similar'*/

$(document).ready(function(){
  $('body').on('click', 'a', function(){
    chrome.tabs.create({url: $(this).attr('href')});
    return false;
  });
});

// get current Guardian url
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log('url', url)
    function constructArticleUrl(d) {
        var similarityRounded = parseFloat(d.similarity).toFixed(2)
        var anchor = ' <a href=' + d.url + '>' + d.title + '</a>'
        return '<div>' + similarityRounded + anchor + '</div>'
    }
    $.ajax({
      url: 'http://localhost:5000/url/most_similar',
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({'url': url}),
      success: function(data, status, jqhxr) {
        var articles = data.most_similar.map(constructArticleUrl)
        $('#recs').html('')
        $('#recs').html(articles.join(''))
      }
    })
});
