class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.string :name
      t.string :price
      t.integer :menu_id
      t.integer :tacotruck_id
      t.string :description
      t.boolean :favorite
      t.boolean :special

      t.timestamps
    end
  end
end
