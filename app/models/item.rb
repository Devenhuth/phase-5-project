class Item < ApplicationRecord
    belongs_to :character
    has_many :users, through: :characters
end
