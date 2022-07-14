class Character < ApplicationRecord
    belongs_to :user
    has_many :items

    validates :name, presence: true
end
