# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# creates Users

User1 = User.create(first_name: "Sabiha", last_name: "Bary", username: "sb@gmail.com", password: "123", is_admin: 1)
User2 = User.create(first_name: "John", last_name: "Smith", username: "john@gmail.com", password: "123", is_admin: false)

puts "created users!"

# category: african goods 
Business1 = Business.create(name: "AL MAKTOUM GOODS", address: "417 7th Ave, Brooklyn, NY 11215", phone_number: "(646) 301-8971", category: "home-goods" , region: "africa" , description: "Sengalese handmade goods.", image_url: "https://images.squarespace-cdn.com/content/v1/5e7829b48921d326e4dd1b5e/1611108317926-MKFOUU8U6YJCNRJUV04B/2020-08-21+23.02.54.jpg", validated_business?: true, women_owned?: false, refugee_owned?: false, user_id: 1)
Business3 = Business.create(name: "Karma Nepal Crafts", address: "266 Bleecker St, New York, NY 10014", category: "home-goods", region: "asia", description: "Nepali handmade goods", image_url: "https://fastly.4sqi.net/img/general/width960/10407316_Ak3uONrUaAeZmpt0s2EPmaukU68i-v-MU2iyEcOHVy8.jpg")
Business4 = Business.create(name: "El Milagro", address: "370 7th Ave, Brooklyn, NY 11215", category: "home-goods", region: "central-america", description: "Mexican handmade goods", image_url: "https://media.rainpos.com/11213/untitled_2021_04_09t085358381.jpg")
Business5 = Business.create(name: "India Saree Palace", address: "3707 74th St Jackson Heights, NY 11372", category: "clothing", region: "south asia", description: "South Asian clothing store specializing in sarees", image_url: "https://i.ytimg.com/vi/X1W9tvPrCqk/maxresdefault.jpg")
Business6 = Business.create(name: "Afrikart", address: "295 Livingston St, Brooklyn, NY 11217", category: "clothing", region: "africa", description: "African clothing", image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/bFESmLcIR4EtFCsjVALvcg/o.jpg")
Business7 = Business.create(name: "Bilal's Jewelry", address: "Ovington Ave & Bay Ridge Ave", category: "jewelry", region: "middle east", description: "Jewelry from Yemen", image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/qNZ8CBVt2BS3msBX1QExbQ/o.jpg")
Business8 = Business.create(name: "Sona Chaandi", address: "3714 74th St Jackson Heights, NY 11372", category: "jewelry", region: "south asia", description: "Desi Jewelry", image_url: "https://fastly.4sqi.net/img/general/width960/265286_2Ix2fTtHD7Gz2MisgpDWQoeDLtaCDNoJ87SKQvseMBA.jpg")


puts "created stores!"




#add column on user table -> .favorites -> this would be an array 


