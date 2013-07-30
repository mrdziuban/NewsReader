NewsReader.Views.FeedsIndexView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    var renderCallback = that.render.bind(that);

    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
  },

  events: {
    "keypress input": "add"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["feeds/feeds_index_view"]({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },

  add: function (e) {
    if (e.keyCode === 13) {
      var that = this;
      var feedUrl = $("input[type=text]").val()

      $.ajax({
        url: "/feeds",
        data: {feed: {url: feedUrl}},
        method: "POST",
        success: function () {
          that.collection.fetch();
          that.render();
        },
        error: function () {
          that.collection.fetch();
          console.log("fuck");
        }
      });
    } else {
      console.log("you didn't press enter");
    }
  }
})