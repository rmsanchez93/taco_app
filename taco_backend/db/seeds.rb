# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tacotruck.destroy_all
Review.destroy_all


raul = User.create(name: 'Raul', email: 'raulsg93@gmail.com', phone: '832-643-9708', password: 'tacos', address: '7902 Corrian Park Circle', city: 'Houston', state: 'TX', user_name:'raulabear', role: 0)
israel = User.create(name: 'Israel', email: 'Israel.pro1994@gmail.com', phone: '832-643-8895', password: '1234', address: '7902 Corrian Park Circle', city: 'Houston', state: 'TX', user_name: 'is09_Real13', role:1)
gadi = User.create(name: 'Gadi', email: 'gadi.hidalgo@gmail.com', phone: '777-777-7777', password: 'gadi', address: '11111 Saathoff Drive', city: 'Houston', state: 'TX', user_name: 'crunchy_bear', role: 1)
truck_owner = User.create(name: 'Truck Owner Test', email: 'owner@gmail.com', phone: 'xxx-xxx-xxxx', password: 'owner', address: 'some fuckig place', city: 'Houston', state: 'TX', user_name: 'owner', role: 0)


labala = Tacotruck.create(name: 'La Bala', owner: raul.name, address: '89056 someplace st.', city:'Houston', state: 'TX', email: 'labala@labala.com' , phone: '789-789-7676', user_id: raul.id)
truck_test = Tacotruck.create(name: 'Truck Owner', owner: truck_owner.name, address: 'truck address test', city:'Houston', state: 'TX', email: 'footrucktest' , phone: '789-789-7676', user_id: truck_owner.id)

rev1 = Review.create(user_id: raul.id, tacotruck_id: labala.id, review: 'this place was aight I felt it could used green sauce', rating: 3)
rev2 = Review.create(user_id: israel.id, tacotruck_id: labala.id, review: 'this place was straight garbage', rating: 1)
rev3 = Review.create(user_id: gadi.id, tacotruck_id: labala.id, review: 'this place could be better', rating: 2)

menu_test = Menu.create(tacotruck_id: labala.id)
truck_menu_test = Menu.create(tacotruck_id: truck_test.id)

menu_item_test = MenuItem.create(name: 'tacos de pastor', price: '3.25', menu_id:menu_test.id, tacotruck_id: labala.id, description: '3 tacos made with pastor pork', favorite: false, special: true)
menu_item_test2 = MenuItem.create(name: 'veggies tacos', price: '3.25', menu_id:truck_menu_test.id, tacotruck_id: truck_test.id, description: 'veggies tacos full of veggie goodness', favorite: true, special: true)


puts 'this is seeded'

