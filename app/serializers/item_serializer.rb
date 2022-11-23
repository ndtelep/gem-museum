class ItemSerializer < ActiveModel::Serializer
  attributes :id, :team, :sport, :category, :era, :brand, :made_in, :game_used, :purchase_price, :asking_price, :details, :league, :image_url, :for_sale
  has_one :user
end
