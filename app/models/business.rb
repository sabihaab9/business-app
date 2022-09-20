class Business < ApplicationRecord
  has_many :businesses_users
  has_many :users, through: :businesses_users








  #validates :name, presence: true
  #validates :description, length: { minimum: 10 }
end
