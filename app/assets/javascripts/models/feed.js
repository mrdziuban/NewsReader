NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

  initialize: function(response) {
    this.attributes = this.parse(response)
  },

  parse: function(response) {
    var that = this;
    var entriesColl = new NewsReader.Collections.Entries(that.id);

    if (response.entries) {
      // Reverse entries here
      response.entries.forEach(function(el, i, ar) {
        entriesColl.add(el)
      })
    }

    response.entries = entriesColl;
    return response;
  }
})