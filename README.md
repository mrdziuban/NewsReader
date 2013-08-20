# NewsReader

An RSS news reader built on Rails and Backbone.js.

## Tech used

* Rails API
    * Feed and Entry models
* Backbone.js
    * Models, collections, views, and templates to make it a single page, responsive app
    * Models and collections listen to changes to automatically update on the page
* HTML5 and CSS 2/3

## Features

* Parsing of RSS feeds using [Simple RSS](https://github.com/cardmagic/simple-rss)
* Sidebar to list all feeds and to add feeds
* Content pane to list feed entries with links to articles
* Expansion of each entry to show description
* Responsive design and no page refreshes thanks to Backbone

Check it out at http://news-reader.herokuapp.com.