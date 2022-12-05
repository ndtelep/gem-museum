class User < ApplicationRecord
    has_many :watches
    has_many :items
    # has_many :watched_items, through: :watches, scope: :items
    has_many :comments
    has_secure_password
    # validates :password, confirmation: true
    # validates :password_confirmation, presence: true
end
