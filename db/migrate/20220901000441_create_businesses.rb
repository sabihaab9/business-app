class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.string :category
      t.string :region
      t.string :description
      t.string :image_url
      t.boolean :validated_business?
      t.boolean :women_owned?
      t.boolean :refugee_owned?

      t.timestamps
    end
  end
end
