import puppeteer from "puppeteer";
import express from 'express';
import request from 'request';

const app = express();

const testReviews = [
  {
          "title": " Yuck",
          "stars": "1.0",
          "text": "Try to put it on"
  },
  {
          "title": " Yuck",
          "stars": "1.0",
          "text": "Try to put it on"
  },
  {
          "title": " easy to use",
          "stars": "1.0",
          "text": "parts missing"
  },
  {
          "title": " can not adjust it.",
          "stars": "1.0",
          "text": "after adjusting going back to last position!!!"
  },
  {
          "title": " Buckel failed",
          "stars": "1.0",
          "text": "After a couple of months the buckle mechanism fails. Belt is useless now."
  },
  {
          "title": " Latch mechanism broken",
          "stars": "1.0",
          "text": "Received the 2 pack tactical belts. The latch mechanism is broken. didn't even get to wear them. Dissapointed."
  },
  {
          "title": " Cheap build",
          "stars": "1.0",
          "text": "After a couple of months of use, they are starting to fall apart.......adding to this...... buckle has completely fallen apart"
  },
  {
          "title": " Flimsy",
          "stars": "1.0",
          "text": "Flimsy, was expecting better"
  },
  {
          "title": " To big",
          "stars": "1.0",
          "text": "She to Big for all of my pants , jeans, hiking pants, bermuda…."
  },
  {
          "title": " Comes undone",
          "stars": "1.0",
          "text": "These are nothing more than a novelty, come undone pretty easily. Looks kool but won't keep your pants up."
  },
  {
          "title": " Great belts but missing important part",
          "stars": "1.0",
          "text": "Belts did not come with clip hook attachement as advertised. Would be really nice to have as I specifically bought them to get the clips included. Amazing belts, but a little false advertising made this a bad purchase"
  },
  {
          "title": " Yuck",
          "stars": "1.0",
          "text": "Try to put it on"
  },
  {
          "title": " Yuck",
          "stars": "1.0",
          "text": "Try to put it on"
  },
  {
          "title": " easy to use",
          "stars": "1.0",
          "text": "parts missing"
  },
  {
          "title": " can not adjust it.",
          "stars": "1.0",
          "text": "after adjusting going back to last position!!!"
  },
  {
          "title": " Buckel failed",
          "stars": "1.0",
          "text": "After a couple of months the buckle mechanism fails. Belt is useless now."
  },
  {
          "title": " Latch mechanism broken",
          "stars": "1.0",
          "text": "Received the 2 pack tactical belts. The latch mechanism is broken. didn't even get to wear them. Dissapointed."
  },
  {
          "title": " Cheap build",
          "stars": "1.0",
          "text": "After a couple of months of use, they are starting to fall apart.......adding to this...... buckle has completely fallen apart"
  },
  {
          "title": " Flimsy",
          "stars": "1.0",
          "text": "Flimsy, was expecting better"
  },
  {
          "title": " To big",
          "stars": "1.0",
          "text": "She to Big for all of my pants , jeans, hiking pants, bermuda…."
  },
  {
          "title": " Comes undone",
          "stars": "1.0",
          "text": "These are nothing more than a novelty, come undone pretty easily. Looks kool but won't keep your pants up."
  },
  {
          "title": " Great belts but missing important part",
          "stars": "1.0",
          "text": "Belts did not come with clip hook attachement as advertised. Would be really nice to have as I specifically bought them to get the clips included. Amazing belts, but a little false advertising made this a bad purchase"
  },
  {
          "title": " Yuck",
          "stars": "1.0",
          "text": "Try to put it on"
  },
  {
          "title": " Yuck",
          "stars": "1.0",
          "text": "Try to put it on"
  },
  {
          "title": " easy to use",
          "stars": "1.0",
          "text": "parts missing"
  },
  {
          "title": " can not adjust it.",
          "stars": "1.0",
          "text": "after adjusting going back to last position!!!"
  },
  {
          "title": " Buckel failed",
          "stars": "1.0",
          "text": "After a couple of months the buckle mechanism fails. Belt is useless now."
  },
  {
          "title": " Latch mechanism broken",
          "stars": "1.0",
          "text": "Received the 2 pack tactical belts. The latch mechanism is broken. didn't even get to wear them. Dissapointed."
  },
  {
          "title": " Cheap build",
          "stars": "1.0",
          "text": "After a couple of months of use, they are starting to fall apart.......adding to this...... buckle has completely fallen apart"
  },
  {
          "title": " Flimsy",
          "stars": "1.0",
          "text": "Flimsy, was expecting better"
  },
  {
          "title": " To big",
          "stars": "1.0",
          "text": "She to Big for all of my pants , jeans, hiking pants, bermuda…."
  },
  {
          "title": " Comes undone",
          "stars": "1.0",
          "text": "These are nothing more than a novelty, come undone pretty easily. Looks kool but won't keep your pants up."
  },
  {
          "title": " Great belts but missing important part",
          "stars": "1.0",
          "text": "Belts did not come with clip hook attachement as advertised. Would be really nice to have as I specifically bought them to get the clips included. Amazing belts, but a little false advertising made this a bad purchase"
  },
  {
          "title": " Yuck",
          "stars": "1.0",
          "text": "Try to put it on"
  },
  {
          "title": " Yuck",
          "stars": "1.0",
          "text": "Try to put it on"
  },
  {
          "title": " easy to use",
          "stars": "1.0",
          "text": "parts missing"
  },
  {
          "title": " can not adjust it.",
          "stars": "1.0",
          "text": "after adjusting going back to last position!!!"
  },
  {
          "title": " Buckel failed",
          "stars": "1.0",
          "text": "After a couple of months the buckle mechanism fails. Belt is useless now."
  },
  {
          "title": " Latch mechanism broken",
          "stars": "1.0",
          "text": "Received the 2 pack tactical belts. The latch mechanism is broken. didn't even get to wear them. Dissapointed."
  },
  {
          "title": " Cheap build",
          "stars": "1.0",
          "text": "After a couple of months of use, they are starting to fall apart.......adding to this...... buckle has completely fallen apart"
  },
  {
          "title": " Flimsy",
          "stars": "1.0",
          "text": "Flimsy, was expecting better"
  },
  {
          "title": " To big",
          "stars": "1.0",
          "text": "She to Big for all of my pants , jeans, hiking pants, bermuda…."
  },
  {
          "title": " Comes undone",
          "stars": "1.0",
          "text": "These are nothing more than a novelty, come undone pretty easily. Looks kool but won't keep your pants up."
  },
  {
          "title": " Great belts but missing important part",
          "stars": "1.0",
          "text": "Belts did not come with clip hook attachement as advertised. Would be really nice to have as I specifically bought them to get the clips included. Amazing belts, but a little false advertising made this a bad purchase"
  }
]
app.get('/scrape', async (req, res) => {
  const { asin } = req.query;
  
  if (!asin) {
    return res.status(400).send('Please provide a URL to scrape');
  }
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto(url);
  // const title = await page.title();
  // await browser.close();
  console.log(asin)
  const reviews = await getQuotes(asin);
  const predictions = await getPredictions(reviews[0]);
  const fiveStarSummary = await getSummary(reviews[1]);
  const oneStarSummary = await getSummary(reviews[2]);
  // const summary = ""
  res.send(JSON.stringify({
    percentage: predictions + '%', 
    fiveStarSummary: fiveStarSummary, 
    oneStarSummary: oneStarSummary}, 
    null, '\t'));
  // res.send("hello")
});

app.get('/home', async function(req, res) {
  const predictions = await getSummary(testReviews);
  res.send(predictions);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

const cookies = [
  {
    name: 'signin-sso-state-ca', 
    value: '8cb50821-16dd-4bca-9a00-5c091d7da3fe'
   },
   
   {
    name: 'session-id', 
    value: '145-1272475-0018209'
   },
   
   {
    name: 'ubid-acbca', 
    value: '132-4467383-1821337'
   },
   
   {
    name: 's_vnum', 
    value: '2054050142115%26vn%3D2'
   },
   
   {
    name: 's_nr', 
    value: '1623248650063-Repeat'
   },
   
   {
    name: 's_dslv', 
    value: '1623248650064'
   },
   
   {
    name: 'i18n-prefs', 
    value: 'CAD'
   },
   
   {
    name: 'ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog', 
    value: '%7B%22distinct_id%22%3A%22189224edbcc827-06445d745b97cd-26031d51-384000-189224edbcd14d2%22%2C%22%24device_id%22%3A%22189224edbcc827-06445d745b97cd-26031d51-384000-189224edbcd14d2%22%2C%22%24user_state%22%3A%22anonymous%22%2C%22extension_version%22%3A%221.5.5%22%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24autocapture_disabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%22enable-session-recording%22%3Afalse%2C%22sourcing%22%3Afalse%2C%22only-company-edit%22%3Afalse%2C%22job-lists%22%3Afalse%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%7D'
   },
   
   {
    name: 'csd-key', 
    value: 'eyJ3YXNtVGVzdGVkIjp0cnVlLCJ3YXNtQ29tcGF0aWJsZSI6dHJ1ZSwid2ViQ3J5cHRvVGVzdGVkIjpmYWxzZSwidiI6MSwia2lkIjoiYzY0NDg4Iiwia2V5IjoibCtPc3pteWdnbFVTbkFhYzZVdkE4Z1FneDlqVXJMZ2dIa0FTbkJYQnpiL21TdWNBODV4QWlQVXBsWUxxMGJPNmVTSEpocDNuS29jUGJjRXBKRFFuZVZ6VkR5S1ZpR0I1Z0lSSnpHck9acExDc25CalA1elcreHRQS0JXZzJTc1A2dzVhRzlVb0JwY2ZGWXNEeXVtY3BHS25UTlJ4d3FiT0NJd3B1cmZKMEpVTFZIb1hZZm5udDVRK0xScENqR2F4VGxwaGlpeEx4ckVPd2dkV2c1cTVHYXB3V1ZSb29TSzFLR3U2eHZnanlaS1lzdVdKQUZRY0FGeW5tTUhHbXU1SGpRWjRpUEhnaTF5Q3dXaVc5d1VVK05Qc0tPTjdHd3R0ODhmRE1OdDJWa3J6SDYrcGZqaUxvVE9YNS95TVZ2SzlnZlhyVXJCNzZJUG9jQ29ocTI2cnpRPT0ifQ=='
   },
   
   {
    name: 'x-acbca', 
    value: '"lDfScGsujuZeea80c1zqftTO2YBAwxnL6pkLiFZp1EyF5QUGPIwNOg7luiN?tzgk"'
   },
   
   {
    name: 'at-acbca', 
    value: 'Atza|IwEBIJZxu1qcq3ejshmuY5n2TJeEYsdxAgNQz9Dtt920ngGKkrqMJsONtfF71uv77SHRGOjl7NuBH7ekhINZDCBgg2m_dxMIlKBfLLt5hWj0KmRm5gXUUmMZzO7XRq5nmHxVrrNGYN9KelKDSkvTraur1WyUG4fjaXDUEyK2jBIdWH9eaK0GUO7IlOYC2ZoYzj9NzEk_hVbuh04A5LVagFZhrZumpbK37UfZCmCi1mQVerih0w'
   },
   
   {
    name: 'sess-at-acbca', 
    value: '"7d3DJOHMmNvZokbT1d5EwKQLeKCI+jsSBImy8pBSrIU="'
   },
   
   {
    name: 'sst-acbca', 
    value: 'Sst1|PQHDqMLjxCBRWDxMW5xr-wuTDA7rpLqZQ0po-3r3k8AlHeqJ6d92KfTSE-Z1WGK23MdlrTeYRY4telXb7BnOcOhBufIGQZPPkso3iDgc4gm5_h3qcSYVK01kAfslDnqGc0ZVTprX4CAGIZBIjfMkGHvoDDK6Vet5gAaJ77P7XMt5B7S2TzO0H8b6LJjyvO6T0goc6x__p3lVbD5qE-cLpGw0gDsb1drivoOnPCkB6T-rcp8B5MB4E-uMb2_3viKNHaFTAWpZ3qcDwjB9e8whwqUov9yptjTjPgbC01J837nvhRRMiAkPPFAAx-YfCKCM7xdsZk6xR1uP4YgBV4N0MNqfVPXpWWYio1sS7NpwqgJZajE'
   },
   
   {
    name: 'session-id-time', 
    value: '2082787201l'
   },
   
   {
    name: 'lc-acbca', 
    value: 'en_CA'
   },
   
   {
    name: 'session-token', 
    value: 'ueirNDB1DNav6QBm8FZUDS0tjiCr8pZnPuday8o8bTEJWp3m9bq9awJxQFSUZcijsUeWEb7UcP5wI9CiGmdJYLhuQkP0DX003aBTV9DzXVIhHIEf/eiE83VI6D5Jq1adqRrNsIf5I3IaIIxe4uwjbbzET+wndSKEFv+TVXhsLrZEGm11sVpekwnnLJmND6Gln3/RpaxYYNJJc0fqO+5uwYMKnJUH0bXZc44orPhVTeFn/KQq58+SA3hVdd2mNEgheSzWY83D2hpuGklE5ozL7nRHCUyyfJUendk6HSa4+Cz8xnN9cRc7nlt4kp6lTlgxgZ6lhvX3VSIVIhH+MjG50pdTGomw8sXnyCngdW4z2K/krzfAU66auOQrhe40Talp'
   },
   
   {
    name: 'csm-hit', 
    value: 'adb:adblk_yes&t:1694238527084&tb:B2FHMV14H6A7BGMGGR64+s-SG2SHXCHC686G4BS5WVY|1694238527083'
   },
]

const getQuotes = async (asin) => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    header: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
    },
  });

  // Open a new page
  const page = await browser.newPage();
  const client = await page.target().createCDPSession();
  const setCookie = await client.send ('Network.setCookie', { 
    name: 'amznfbgid', value: 'X05-9930568-3308693:1621105564', domain: 'https://amazon.ca' 
  });

  const allReviews = [];
  const allReviewsFilter = {name: "all_reviews", value: ""};
  const fiveStarFilter = {name: "five_star", value: "ref=cm_cr_unknown?filterByStar=five_star&"}
  // const threeStarFilter = "ref=cm_cr_unknown?filterByStar=three_star&"
  const oneStarFilter = {name: "one_star", value: "ref=cm_cr_unknown?filterByStar=one_star&"}
  
  let filters = [allReviewsFilter, fiveStarFilter, oneStarFilter]

  for (let i = 0; i < filters.length; i++) {
    const name = filters[i]["name"];
    const filter = filters[i]["value"];
    // const filter = "";
    const reviews = [];

    let lastPageReached = false;
    let signinCounter = 0;
    let counter = 1;
    let totalCounter = 10;
    if (name === "five_star" || name === "one_star") {
      totalCounter = 1;
    }

    const link = `https://www.amazon.ca/product-reviews/${asin}/reviewerType=all_reviews&${filter}pageNumber=${counter}`;

    while (!lastPageReached && allReviews.length < 100 && signinCounter < 3 && counter <= totalCounter) {
      // get next page
      await page.goto(link, {
        waitUntil: "domcontentloaded",
      });

      // check if need to sign in
      const signInText = await page.evaluate(() => {
        return document.querySelector(".a-spacing-small") ? document.querySelector(".a-spacing-small").innerText : null;
      });

      if (signInText === "Sign-In") {
        signinCounter += 1;
        continue;
      }
      const reviewList = await page.evaluate(() => {
        const reviewList = document.querySelectorAll(".a-section .celwidget");
        return Array.from(reviewList).map((review) => {
            // const title = review.querySelector(".a-row a-spacing-none");
            const reviewTitle = review.querySelector(".review-title");
            const reviewData = review.querySelector(".review-text-content");
            const stars = review.querySelector(".a-icon-alt");
            const nextPageUrl = review.querySelector(".a-last a");
            return {
              title: (reviewTitle) ? reviewTitle.innerText : null,
              stars: (stars) ? stars.innerText : null,
              text: (reviewData) ? reviewData.innerText : null
            }
        });
      });
      // console.log(reviewList)
      reviewList.forEach((review) => {
        if (review.title && review.stars && review.text) {
          // valid review
          if (review.title.includes(review.stars)) {
            // remove stars from title
            review.title = review.title.replace(review.stars, "");
          }
          review.title = review.title.replace(/(\r\n|\n|\r)/gm, "");
          review.stars = review.stars.split(" ")[0];
          review.text = review.text.replace(/(\r\n|\n|\r)/gm, "");

          reviews.push(review);
        } else if (review.nextPageUrl) {
          // next page
          // nextPage = review.nextPageUrl;
        }
      });
      // await page.close();
      // await page.waitForTimeout(3000);
      console.log(reviews.length);
      counter += 1;
      console.log(counter);
      // nextPage = amazonLink + counter;
    }
    allReviews.push(reviews);
  }
  // console.log(JSON.stringify(allReviews, null, '\t'));
  await browser.close();
  return allReviews;
};

const getPredictions = async (reviews) => {
  const backEndUrl = "http://127.0.0.1:5000/evaluate";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviews),
  };
  return await fetch(backEndUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const positives = data["positive"];
      const negatives = data["negative"];
      const neutrals = data["neutral"];
      const total = positives + negatives + neutrals;
      const positivePercentage = Math.round((positives / total) * 100);
      return positivePercentage;
    }
  ).catch((error) => console.log(error));
}

const getSummary = async (reviews, isPositive) => {
  const backEndUrl = "http://127.0.0.1:5000/summary" + (isPositive ? "?isPositive=true" : "");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviews),
  };
  return await fetch(backEndUrl, requestOptions)
    .then((response) => response.json())  
    .then((data) => {
      return data;
    }).catch((error) => console.log(error));
}