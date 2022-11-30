class User < ApplicationRecord
    has_many :watches
    has_many :likes
    has_many :items, through: :watches
    has_many :comments
    has_secure_password
    # validates :password, confirmation: true
    # validates :password_confirmation, presence: true
end
