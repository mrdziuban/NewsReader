NewsReader.Models.Entry = Backbone.Model.extend({
  initialize: function (feedId) {
    url: "/feeds/" + feedId
  }
})