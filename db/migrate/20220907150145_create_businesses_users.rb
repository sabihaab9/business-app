class CreateBusinessesUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses_users do |t|
      t.integer :business_id
      t.integer :user_id

      t.timestamps
    end
  end
end
