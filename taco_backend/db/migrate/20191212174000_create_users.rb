class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :facebook, :null => true
      t.string :instagram, :null => true
      t.string :user_name
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :password_digest

      t.timestamps
    end
  end
end
