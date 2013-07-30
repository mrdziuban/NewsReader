NewsReader.Routers.FeedsRouter = Backbone.Router.extend({

  initialize: function($rootEl, feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function () {
    var that = this;
    // that.feeds.fetch({
    //   success: function(){
    //     var feedsIndexView = new NewsReader.Views.FeedsIndexView({
    //       collection: that.feeds
    //     });
    //     that.$rootEl.html(feedsIndexView.render().$el);
    //   }
    // });
    that.$rootEl.empty();

  },

  show: function(id) {
    var that = this;
    that.getFeed(id, function(feed) {
      var feedShowView = new NewsReader.Views.FeedShowView({
        model: feed
      });
      that.$rootEl.html(feedShowView.render().$el);
    })
  },

  getFeed: function(id, callback) {
    var feed = this.feeds.get(id);
    if (!feed) {
      Backbone.history.navigate("");
    } else {
      callback(feed);
    }
  }
})