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

raul = User.create(name: 'Raul', email: 'raulsg93@gmail.com', phone: '832-643-9708', password: 'tacos', address: '7902 Corrian Park Circle', city: 'Houston', state: 'TX', user_name:'raulabear')
israel = User.create(name: 'Israel', email: 'Israel.pro1994@gmail.com', phone: '832-643-8895', password: '1234', address: '7902 Corrian Park Circle', city: 'Houston', state: 'TX', user_name: 'is09_Real13')
gadi = User.create(name: 'Gadi', email: 'gadi.hidalgo@gmail.com', phone: '777-777-7777', password: 'gadi', address: '11111 Saathoff Drive', city: 'Houston', state: 'TX', user_name: 'crunchy_bear')


labala = Tacotruck.create(name: 'La Bala', address: '89056 someplace, somehwere, TX', phone: '789-789-7676')

rev1 = Review.create(user_id: raul.id, tacotruck_id: labala.id, review: 'this place was aight I felt it could used green sauce', rating: 3)
rev2 = Review.create(user_id: israel.id, tacotruck_id: labala.id, review: 'this place was straight garbage', rating: 1)
rev3 = Review.create(user_id: gadi.id, tacotruck_id: labala.id, review: 'this place could be better', rating: 2)

puts 'this is seeded'

