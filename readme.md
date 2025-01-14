# MIYO Recipes

<a href="https://miyo-recipes.herokuapp.com/">Visit MIYO Recipes</a>

<details>
<summary>
<small>for local install, click here!</small>
</summary>
<br>

Requirements to run app locally:
* Postgres
* NPM 

# Install Procedure:

* in the terminal, cd into the apps main directory and run the following commands:
  1. ``npm install`` to install dependencies
  2. ```createdb cookbook_app_developement``` followed by ```sequelize init``` to create main database and initialize sequelize
  3. ```sequelize db:migrate``` to create database tables and ```sequelize db:seed:all``` to seed data and prepare app for use

* Run ```node index.js``` to start the server and point your browser to http://localhost:3000/ and start uploading your recipes!

* To use the google places API features of the app you will need to acquire an API key. Use these instructions as a reference: https://developers.google.com/maps/documentation/javascript/places 

* once you acquire your key you can create a .env file and add your key using the following format 

```js
MAPSAPIKEY=<yourAPIkey>
```



</details>

----

<br>

The "MIYO" in MIYO Recipes stands for 'Make It Your Own'. The idea being that users will be able to find user and restaurant uploaded recipes, add them to their own collection, but also edit and expand upon the originals. Think of it like forking and cloning a recipe and being able to submit your changes. The original recipe will always remain but will also be linked to any recipes tweaked by other users. Beyond that, I want this to also be a space where Restaurants can share some of their iconic and classic recipes and an everyday person, or hobbyist cook can tweak and adapt said recipe to meet any criteria they might find useful. 


## Tech Stack

* HTML5, JavaScript, Bulma to aid in styling

 * Node.js PostgreSQL, Sequelize, Express, EJS, 

 ## API

 --- 

This app utilizes the Google Places API to pull relevant place data for restaurants, such as address, hours of operation, ratings, etc.

In this example the API will make two seperate calls, the first will try and find the placeId by searching the restaurant name:

```js
let searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${restaurantName}&key=${YOURAPIKEY}`
 
axios.get(searchUrl)
  .then(apiRes => {
    let placeId = apiRes.data.results[0].place_id

        return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${YOURAPIKEY}`)
      })
      .then(apiRes => {
        return apiRes.data})
      }) 
```

<details>
<summary>Click for an example of returned data: </summary>

```
{
  "html_attributions": [],
  "result":
    {
      "address_components":
        [
          { "long_name": "48", "short_name": "48", "types": ["street_number"] },
          {
            "long_name": "Pirrama Road",
            "short_name": "Pirrama Rd",
            "types": ["route"],
          },
          {
            "long_name": "Pyrmont",
            "short_name": "Pyrmont",
            "types": ["locality", "political"],
          },
          {
            "long_name": "Council of the City of Sydney",
            "short_name": "Sydney",
            "types": ["administrative_area_level_2", "political"],
          },
          {
            "long_name": "New South Wales",
            "short_name": "NSW",
            "types": ["administrative_area_level_1", "political"],
          },
          {
            "long_name": "Australia",
            "short_name": "AU",
            "types": ["country", "political"],
          },
          {
            "long_name": "2009",
            "short_name": "2009",
            "types": ["postal_code"],
          },
        ],
      "adr_address": '<span class="street-address">48 Pirrama Rd</span>, <span class="locality">Pyrmont</span> <span class="region">NSW</span> <span class="postal-code">2009</span>, <span class="country-name">Australia</span>',
      "business_status": "OPERATIONAL",
      "formatted_address": "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
      "formatted_phone_number": "(02) 9374 4000",
      "geometry":
        {
          "location": { "lat": -33.866489, "lng": 151.1958561 },
          "viewport":
            {
              "northeast":
                { "lat": -33.8655112697085, "lng": 151.1971156302915 },
              "southwest":
                { "lat": -33.86820923029149, "lng": 151.1944176697085 },
            },
        },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_pinlet",
      "international_phone_number": "+61 2 9374 4000",
      "name": "Google Workplace 6",
      "opening_hours":
        {
          "open_now": false,
          "periods":
            [
              {
                "close": { "day": 1, "time": "1700" },
                "open": { "day": 1, "time": "0900" },
              },
              {
                "close": { "day": 2, "time": "1700" },
                "open": { "day": 2, "time": "0900" },
              },
              {
                "close": { "day": 3, "time": "1700" },
                "open": { "day": 3, "time": "0900" },
              },
              {
                "close": { "day": 4, "time": "1700" },
                "open": { "day": 4, "time": "0900" },
              },
              {
                "close": { "day": 5, "time": "1700" },
                "open": { "day": 5, "time": "0900" },
              },
            ],
          "weekday_text":
            [
              "Monday: 9:00 AM – 5:00 PM",
              "Tuesday: 9:00 AM – 5:00 PM",
              "Wednesday: 9:00 AM – 5:00 PM",
              "Thursday: 9:00 AM – 5:00 PM",
              "Friday: 9:00 AM – 5:00 PM",
              "Saturday: Closed",
              "Sunday: Closed",
            ],
        },
      "photos":
        [
          {
            "height": 3024,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/105067373811767106297">Shaun Craig</a>',
              ],
            "photo_reference": "Aap_uECTSiFbO2Qg81vEQkbLMh4wHhilVWH4l3oNCqj2NHeTK0VUey6lTn_jhUfeKUubL8aWmhl_nx3ilV-dZqeIlyaS-q6Oo_UNn-aUjy1JSrKzZxjBwCEp0dZi8WyS_0dooU2C-oR0gZRjNK14dbwqto2E8g2c9upoiJPQTWNoqYtgbdoa",
            "width": 4032,
          },
          {
            "height": 3264,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/102493344958625549078">Heyang Li</a>',
              ],
            "photo_reference": "Aap_uEATBbKi76kbA2OColmGnmruSknqNKhf4kMJX_YlCXvQaWJhSqkSdkDxF3hmoyAJk1slQrG8TmZwsO7FkzAQQ0x1tIknYf-v0O01LWIQbva9EyuQUyYXALJNAr7ixCKBMjyKywQqfGZRNVbEfSqIxUrTG4HZDx9VRe1sAMydadUyuUXs",
            "width": 4912,
          },
          {
            "height": 1836,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/116807455538142476628">Anand Ema</a>',
              ],
            "photo_reference": "Aap_uECyuzfnLNlfA5ioL01LpmwUfDsjM398AT8Ysd6qrGTwevk1OT44jsw8a0dsNQX8rPA5Pmt6A0mWGh4p2J4e1dFgifnWGN17Pn8QgUmKcGlXUJFZKfqp5hQmfvtjqPBMBtmZ3oMIq8sX1DCHpcVx-DZI3Pt0iXMyFDPmfnrjarPIj9YW",
            "width": 3264,
          },
          {
            "height": 3024,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/115886271727815775491">Anthony Huynh</a>',
              ],
            "photo_reference": "Aap_uEDW89cNhv_xXN124XRb451wdOwLJ1LTIuZ-ESOHr3g9NyXqeBLjy4O0xhRP6xCt0pt62aJi7fkCrc_Xy3t-UYU1nSZoOfs9z1fR7ICFTxOBHJzjxQACA45SRu99iSw5bbvFgPODXfViTwNzz81R6rMs39dRqTNmk9sYq5nss_2GOkFm",
            "width": 4032,
          },
          {
            "height": 3024,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/102939237947063969663">Jasen Baker</a>',
              ],
            "photo_reference": "Aap_uEBNxWNbur6GObqQuIDMflRwEM79ItI4d3Fpgg_hn5fAljaTu40e47VAaT5TTBVoxRJ2tKIbUhhpUo-VDMxHd2nHE4QtrQntp8x5ddBZudB8Re7xdi3aUaQOGw7SWqFh6WwhRY6gYQ3EYK98pH6VNF5_-Bu005dd0W9ldyyjXBfz4S6T",
            "width": 4032,
          },
          {
            "height": 3024,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/100678816592586275978">Jeremy Hsiao</a>',
              ],
            "photo_reference": "Aap_uEAKW4dw7yC3vl6QWIu1vx5hIUHTkjccM4K-za6_zRgwxFzlWxAFJ9M7HlCyMfasQH_fC2c0hY9AZh0z8vZd_pB5xTFDbLZrDq6PayaXME6Y2vgGrSgHOSCtYC2vDODT4Q-_TCBgWfBT0CYfHOE9tMpZWrH1KT6u-Zv3NYBbXa3ssyrk",
            "width": 4032,
          },
          {
            "height": 3024,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/100678816592586275978">Jeremy Hsiao</a>',
              ],
            "photo_reference": "Aap_uEACMvdbZdKXZP4E9aOw9eeoBVbKsQh0TcbYzqRiUzZkAx09ykX2r5gf66d5n5KzqmUBGdHavSpHye_-ZKpp2UeMuufmx6vwWx9sQtVXDZ5uI6O0yg29BorK5KHzxWqahAFuJRLHOmaYSwwnno318UrR5alb-zFXqeuNpa95e_sn0YW4",
            "width": 4032,
          },
          {
            "height": 3036,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/100482974853389838438">Mark Vozzo</a>',
              ],
            "photo_reference": "Aap_uEBE3MuFrsb-nu8po-FsX1zvFatDzSzY1asoBtu6EAQbcukr843rJm7gpI8loe0c_WBAUv4XmnWwhj4U0HHx8Ka5WAKgQBUZGI-XMO1UP44bwMo0Q5XqjyfWwsIgzBJbYftFY-YA_7FEVPMHqgIHkK_weWkW7Gn95gILlM1En0LJUJH6",
            "width": 4048,
          },
          {
            "height": 498,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/103245129386449712319">Simon TestOne</a>',
              ],
            "photo_reference": "Aap_uEBe5dY4U34xvY4zH0xCl2pAXyJI3IDrVs8AJFZG9sC7qcGeZ_T56RwJ8avcGJI7iT7WvRytV1vMOFaQfTUx5R8fWZwPaHBqqKSskEDJ7zZKJ0dsPR5y00HNJrdxwZ1d2ND8pjfaTenKF71hsBkULePjqxgqrsZqyNEu2e7ogM1giNqz",
            "width": 750,
          },
          {
            "height": 3024,
            "html_attributions":
              [
                '<a href="https://maps.google.com/maps/contrib/104578111747260232633">Raymond LAM</a>',
              ],
            "photo_reference": "Aap_uEDZINRC-TvNlABT-VOU8Ae5iyofoml1D5woUCn-K1WT9O-_o-y-0cTNIJHhYv96aUEH8ZWRBO2b08ct1OBk9CbcKqL6A_Se9mcUNGG105gXGVb-qbCwLKUL4DCF-age8wMzJaUm3P_NE48WJJrLiWd19L2I3xAQUv--PL7jw4wXCZEa",
            "width": 4032,
          },
        ],
      "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4",
      "plus_code":
        {
          "compound_code": "45MW+C8 Pyrmont NSW, Australia",
          "global_code": "4RRH45MW+C8",
        },
      "rating": 4.1,
      "reference": "ChIJN1t_tDeuEmsRUsoyG83frY4",
      "reviews":
        [
          {
            "author_name": "Mark Smith (Mark ZZZ Smith)",
            "author_url": "https://www.google.com/maps/contrib/109015045837507592030/reviews",
            "language": "en",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14Gi-thk-CV41Ymw9Udvr0O5WL8Iguf9HYAKKyEWDxw=s128-c0x00000000-cc-rp-mo",
            "rating": 5,
            "relative_time_description": "a year ago",
            "text": "Great place to visit, cafeteria great. Also has a good toilet.",
            "time": 1589072760,
          },
          {
            "author_name": "Agent Cliff (The Mediator)",
            "author_url": "https://www.google.com/maps/contrib/100253428394439543029/reviews",
            "language": "en",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GhSLTmC1QVzI8oXWkDvqv_fTq1Xmm7_gM2udfRlbw=s128-c0x00000000-cc-rp-mo-ba3",
            "rating": 4,
            "relative_time_description": "5 months ago",
            "text": "Had an office tour here a few years ago and absolutely loved the look of it , as an AV person I was very impressed with the meeting rooms and loved the themes. Most of the staff were generally friendly and I was offered a range of different waters when waiting at reception.\n\nThe office is beautifully designed, onsite chef cooked a pretty alright lunch, staff interviewing as well were quite friendly and knew to be precise for technical interviews. I’d like to come back again one day for another tour just to see how it’s all going :)",
            "time": 1614291725,
          },
          {
            "author_name": "Xavier Le Baron",
            "author_url": "https://www.google.com/maps/contrib/104602961630797902494/reviews",
            "language": "en",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GhbuCpv4_XNH8EWPZoGFwgWjiCQvCcVYiwJNxnMIPs=s128-c0x00000000-cc-rp-mo-ba4",
            "rating": 5,
            "relative_time_description": "3 months ago",
            "text": "Possibly the best office in Sydney? :)\nWhat an amazing place to work at!",
            "time": 1618388082,
          },
          {
            "author_name": "Binod Mainali",
            "author_url": "https://www.google.com/maps/contrib/110005203185645729740/reviews",
            "language": "en",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GitXX8rr6uxnCeLo4Kwd_UKm7ctfOYH9r7tcocqeg=s128-c0x00000000-cc-rp-mo",
            "rating": 1,
            "relative_time_description": "6 months ago",
            "text": "I had some problem with google account, there is no way to contact google customer service. The only people i can contact to is the google ad Team. Google only cares about its ad what a selfish tech. There is not even a live chat, my password linked with google is compromised but there is no one to talk to. the 1800 no is a useless no or even the no provided at this store is useless. Google support only asks to send a feedback of the problem and nothing else. I had sent it but its been more than a month no one has contacted still. Such a selfish, greedy billionaire tech giant. Cant believe, even a small struggling bussiness has someone to chat to. Such a low pathetic moral of google . Humanity will not be too long if our biggest tech are surround by just greed of $$$$$$....Shame on you # greedygoogle#greedysundarpichai#Australiagoogletaxloot.",
            "time": 1611295578,
          },
          {
            "author_name": "doug cliff",
            "author_url": "https://www.google.com/maps/contrib/114222669528052367599/reviews",
            "language": "en",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14Gjbd1ELb3S4E0R10kvV2h9EtBuME8xb9yWbtXa3qyU=s128-c0x00000000-cc-rp-mo-ba6",
            "rating": 4,
            "relative_time_description": "7 months ago",
            "text": "It appears from reading the reviews that Google in not too good at talking to people on the phone. I guess when you are as big as they are they can do what they want as there is not really another alternative. I use their services such as maps and mail but also contribute a lot of data such as photo’s and reviews. I was under the impression that what I was doing was helping others in the community. I had not realised that google could pick and choose who used these services and can block out any one out they don’t like. I was very upset when they black baned some Chinese manufactures who are making really good products. I had also not realised that Google is a slave to any crazy president that gets into power. Anyway I will keep using  their products as they are good and hope that one day they will be available for all to use.",
            "time": 1608012004,
          },
        ],
      "types": ["point_of_interest", "establishment"],
      "url": "https://maps.google.com/?cid=10281119596374313554",
      "user_ratings_total": 932,
      "utc_offset": 600,
      "vicinity": "48 Pirrama Road, Pyrmont",
      "website": "http://google.com/",
    },
  "status": "OK",
}
```
</details>


</br>

## User Stories
---

* I want to be able to share my family recipes with other users

* I want to be able to find a recipe I'm excited about and adapt it to be my own, and share that with the user base.

* If I stumble on a recipe uploaded by a Restaurant I'd like to quickly find out more info about said restaurant, such as location or google rating. 

* I really love this recipe I found but my family doesn't eat pork, and we'd love to cut down the sodium levels so I'll tweak it and upload my changes because other users might find it useful. 

## Wireframe

<img src="images/wireframe1.png">
<img src="images/wireframe2.png">


## ERD
---
<img src="images/ERD.png">

---


## MVP GOALS

1. Users can upload recipes that include a quick story on what makes this recipe special to them.

2. Recipes that belong to a restaurant will display google places info using the google places api. 

3. Recipe info such as ingredients, cook method, name, prep and cook time and difficulty will all be pulled from the database and rendered on an easy to read page. 

## STRETCH GOALS

1. Users will be able to click 'Make it your own' on a recipe and have it added to their collection and editable so they can tweak it as they see fit. 

1. Intergrate (or make) an ingredient parser so ingredients can be entered as strings and broken down into units and ingredients 

2. Intergrate social media like features such as following an author, creating groups, and messaging 

3. Users can comment on individual recipes 

4. Recipes are searchable




