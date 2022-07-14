class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture, :dead, :user_id
  
end
