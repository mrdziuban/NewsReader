window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebar, $content, feedsData) {
    var feeds = new NewsReader.Collections.Feeds(feedsData);
    this.installSidebar($sidebar, feeds);
    new NewsReader.Routers.FeedsRouter($content, feeds);
    Backbone.history.start();
  },

  installSidebar: function ($sidebar, feeds) {
    var that = this;
    var feedsIndexView = new NewsReader.Views.FeedsIndexView({
      collection: feeds
    });

    $sidebar.html(feedsIndexView.render().$el)
  }
};

// $(document).ready(function(){
//   var feeds = JSON.parse($("#bootstrapped_feed_data").html());
//   NewsReader.initialize($("body"), feeds);
// });
