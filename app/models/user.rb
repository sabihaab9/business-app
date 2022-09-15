class User < ApplicationRecord

    has_secure_password
    
    # has_many :businesses_user
    # has_many :businesses, through :businesses_user
    has_and_belongs_to_many :businesses

    #validates :username, presence: true, uniqueness: true


end
