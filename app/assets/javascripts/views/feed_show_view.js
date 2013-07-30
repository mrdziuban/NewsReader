NewsReader.Views.FeedShowView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    var renderCallback = that.render.bind(that);

    that.listenTo(that.model.get('entries'), "remove", renderCallback);
    that.listenTo(that.model.get('entries'), "add", renderCallback);
    that.listenTo(that.model.get('entries'), "reset", renderCallback);
  },

  events: {
    "click button.refresh": "refresh"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["feeds/feed_show_view"]({
      feed: that.model
    });

    that.$el.html(renderedContent);
    that.$('li').first().hide();

    return that;
  },

  refresh: function () {
    var that = this;
    this.model.fetch({
      success: function (model, response, options) {
        console.log("success");
        that.render();
      },
      error: function(model, xhr, options) {
        console.log(xhr);
        console.log("error");
      }
    });
  }
})