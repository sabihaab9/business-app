class AddLinksColumnToBusiness < ActiveRecord::Migration[6.1]
  def change
    add_column :businesses, :link, :string
  end
end
