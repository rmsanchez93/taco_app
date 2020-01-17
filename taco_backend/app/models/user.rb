class User < ApplicationRecord
    validates_uniqueness_of :user_name
    has_secure_password
    has_many :reviews
    has_one :tacotruck
    
end
