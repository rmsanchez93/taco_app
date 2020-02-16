class Tacotruck < ApplicationRecord
    belongs_to :user
    has_many :reviews
    has_many :menus
    has_many :menu_items
end
