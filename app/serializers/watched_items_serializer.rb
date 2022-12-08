class WatchedItemsSerializer < ActiveModel::Serializer
  attributes :items

  def items
    binding.break
  end
end
