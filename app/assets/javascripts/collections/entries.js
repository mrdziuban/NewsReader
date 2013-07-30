NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Entry,

  initialize: function (feedId) {
    url: "feeds/" + feedId + "/entries"
  }
})