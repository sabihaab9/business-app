# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# creates Users

User1 = User.create(first_name: "sabiha", last_name: "bary", username: "sb@gmail.com", password: "123", is_admin: true)
User2 = User.create(first_name: "bob", last_name: "rock", username: "bob@gmail.com", password: "123", is_admin: false)

puts "created users!"

# category: african goods 
Business1 = Business.create(name: "AL MAKTOUM GOODS", address: "417 7th Ave, Brooklyn, NY 11215", phone_number: "(646) 301-8971", category: "home-goods" , region: "africa" , description: "Sengalese handmade goods.", image_url: "https://images.squarespace-cdn.com/content/v1/5e7829b48921d326e4dd1b5e/1611108317926-MKFOUU8U6YJCNRJUV04B/2020-08-21+23.02.54.jpg", validated_business?: true, women_owned?: false, refugee_owned?: false, user_id: 1)
Business2 = Business.create(name: "Thai Farm Kitchen" , address: "416 Church Ave., Brooklyn, New York 11218", phone_number: "347-533-9368", category: "restaurant" , region: "southeast asia" , description: " farm-to-table thai food" , image_url: "https://bit.ly/3D53b3P", validated_business?: true, women_owned?: true , refugee_owned?: false)
Business3 = Business.create(name: "Amba Jewelers", address: " 3713 74th Street, Queens, NY 11372", category: "jewerly", region: "south asian", description: "jewerly", image_url: "")
puts "created stores!"




#add column on user table -> .favorites -> this would be an array 


