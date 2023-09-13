var serverhost = 'http://127.0.0.1:3000';

const getQuery = (currentUrl) => {
  currentUrl = currentUrl.split('/');
  var query = '';
  for (var i = 0; i < currentUrl.length; i++) {
    if (currentUrl[i] == 'dp') {
      query = currentUrl[i+1].slice(0, 10)
      break;
    }
  }
  return query;
}

const setResult = (percentage, fiveStarSummary, oneStarSummary) => {
  hideWelcome();
  const resultContainer = document.getElementById('result-container');
  resultContainer.style.display = 'block';
  document.getElementById('results').innerHTML = percentage + ' of reviewers would recommend this product';
  document.getElementById('goodpoints').innerHTML = fiveStarSummary;
  document.getElementById('badpoints').innerHTML = oneStarSummary;
}

const hideWelcome = () => {
  document.getElementById('welcome').style.display = 'none';
}

window.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('keywordsubmit');
  const resultContainer = document.getElementById('result-container');

  // check if there is data in browser storage
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let currentUrl = tabs[0].url;
    let query = getQuery(currentUrl);
    chrome.storage.sync.get(null, function(result) {
      if (result[query] != undefined) {
        console.log("loaded from storage")
        const percentage = result[query]['percentage'];
        const fiveStarSummary = result[query]['fiveStarSummary'];
        const oneStarSummary = result[query]['oneStarSummary'];
        setResult(percentage, fiveStarSummary, oneStarSummary);
      }
    });
  });

  button.addEventListener('click', function() {
    hideWelcome();
    // const keyword = document.getElementById('keyword').value;
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      // check if current site is Amazon
      let currentUrl = tabs[0].url;
      if (!currentUrl.includes('amazon') || !currentUrl.includes('dp')) {
        resultContainer.style.display = 'block';
        resultContainer.innerText = 'Please go to an Amazon product page to use this extension';
        resultContainer.style.fontWeight = 'bold';
        return;
      }
      document.getElementById('loading-text').style.display = 'block';
      var query = getQuery(currentUrl);
      if (query == '') {
        resultContainer.style.display = 'block';
        resultContainer.innerText = 'A parsing error occurred. Please try again.';
        resultContainer.style.fontWeight = 'bold';
        return;
      }
      var url = serverhost + '/scrape?asin=' + query;
      fetch(url)
      .then(response => response.json())
      .then(response => {
        document.getElementById('loading-text').style.display = 'none';
        console.log(response)
        const percentage = response['percentage'];
        const fiveStarSummary = response['fiveStarSummary'];
        const oneStarSummary = response['oneStarSummary'];
        setResult(percentage, fiveStarSummary, oneStarSummary);

        // save to browser storage
        var data = {};
        data[query] = {
          'percentage': percentage,
          'fiveStarSummary': fiveStarSummary,
          'oneStarSummary': oneStarSummary
        };
        chrome.storage.sync.set(data);
      })
      .catch(error => console.log(error))
      
    });
  });
});

