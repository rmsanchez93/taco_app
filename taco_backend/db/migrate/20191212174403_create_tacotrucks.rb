class CreateTacotrucks < ActiveRecord::Migration[6.0]
  def change
    create_table :tacotrucks do |t|
      t.string :name
      t.string :owner
      t.string :email
      t.string :address
      t.string :city
      t.string :state
      t.string :phone
      t.integer :user_id

      t.timestamps
    end
  end
end
