class Menu < ApplicationRecord
    belongs_to :tacotruck
    has_many :menu_items
end
