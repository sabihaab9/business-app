class Business < ApplicationRecord
  has_and_belongs_to_many :users

  #validates :name, presence: true
  #validates :description, length: { minimum: 10 }
end
