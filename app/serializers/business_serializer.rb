class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone_number, :category, :region, :description, :image_url, :validated_business?, :women_owned?, :refugee_owned?
end
