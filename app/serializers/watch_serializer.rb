class WatchSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :item, serializer: WatchedItemsSerializer
end
