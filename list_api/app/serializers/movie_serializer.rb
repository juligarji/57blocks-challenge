class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img, :favorite
end
