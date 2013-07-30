class AddDescriptionToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :description, :text, default: "No Description Given"
  end
end
