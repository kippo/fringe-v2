# This migration comes from koi (originally 20130724030150)
class AddGroupToSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :translations, :group, :string
  end
end
