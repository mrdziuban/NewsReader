class Entry < ActiveRecord::Base
  attr_accessible :guid, :link, :published_at, :title, :json, :feed_id, :description

  belongs_to :feed

  def self.create_from_json!(entryData, feed)
    e = Entry.create!({
      guid: entryData.guid,
      link: entryData.link,
      published_at: entryData.pubDate,
      title: entryData.title,
      json: entryData,
      feed_id: feed.id,
      description: entryData.description
    })
    e.title = HTMLEntities.new.decode(HTMLEntities.new.decode(e.title))
    e.description = HTMLEntities.new.decode(HTMLEntities.new.decode(e.description))
    e.save
  end
end
