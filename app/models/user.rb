class User < ApplicationRecord
    has_secure_password

    has_many :characters
    has_many :items, through: :characters

    validates :username, presence: true
    validates_uniqueness_of :username
end
