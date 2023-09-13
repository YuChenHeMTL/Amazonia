var serverhost = 'http://127.0.0.1:3000';

// var backgroundPage = chrome.runtime.webNavigation.onCompleted
// backgroundPage.openPopup();
// chrome.webNavigation.onCompleted.addListener(function() {
//   chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let currentUrl = tabs[0].url;
//     alert(currentUrl)
// })});

window.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('keywordsubmit');
  button.addEventListener('click', function() {
    // const keyword = document.getElementById('keyword').value;
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      // check if current site is Amazon
      let currentUrl = tabs[0].url;
      if (!currentUrl.includes('amazon') || !currentUrl.includes('dp')) {
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerText = 'Please go to an Amazon product page to use this extension';
        resultContainer.style.fontWeight = 'bold';
        button.disabled = true;
        return;
      }
      currentUrl = currentUrl.split('/');
      let query = '';
      for (var i = 0; i < currentUrl.length; i++) {
        if (/^[A-Za-z0-9]*$/.test(currentUrl[i]) && currentUrl[i].length == 10) {
          query = currentUrl[i];
        }
      }

      var url = serverhost + '/scrape?asin=' + query;
      const results = fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        const percentage = response['percentage'];
        const fiveStarSummary = response['fiveStarSummary'];
        const oneStarSummary = response['oneStarSummary'];
        document.getElementById('results').innerHTML = percentage + ' of reviewers would recommend this product';
        document.getElementById('result-container').style.visibility = 'visible';
        document.getElementById('goodpoints').innerHTML = fiveStarSummary;
        document.getElementById('badpoints').innerHTML = oneStarSummary;
      })
      .catch(error => console.log(error))
      
    });
  });
})



// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
    
      
//     var url = serverhost + '/scrape?asin=' + request.topic;
    
//     console.log(url);
    
//     //var url = "http://127.0.0.1:8000/wiki/get_wiki_summary/?topic=%22COVID19%22"	
//     fetch(url)
//     .then(response => response.json())
//     .then(response => sendResponse({text: response}))
//     .catch(error => console.log(error))
      
//     return true;  // Will respond asynchronously.
    
// });
