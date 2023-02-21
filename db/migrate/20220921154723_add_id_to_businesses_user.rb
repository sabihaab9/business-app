class AddIdToBusinessesUser < ActiveRecord::Migration[6.1]
  def change
    add_column :businesses_users, :id, :primary_key
  end
end
