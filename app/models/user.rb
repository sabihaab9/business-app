class User < ApplicationRecord

    has_secure_password

    has_many :businesses_users
    has_many :businesses, through: :businesses_users





    #validates :username, presence: true, uniqueness: true

end
