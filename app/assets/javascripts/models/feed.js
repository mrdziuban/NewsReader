NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

  initialize: function(response) {
    this.attributes = this.parse(response)
  },

  parse: function(response) {
    var that = this;
    var entriesColl = new NewsReader.Collections.Entries(that.id);

    if (response.entries) {
      for (var i = response.entries.length - 1; i >= 0; i--) {
        entriesColl.add(response.entries[i]);
      }
    }

    response.entries = entriesColl;
    return response;
  }
})