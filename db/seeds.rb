# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(username: "Deven", password: "1234", password_confirmation: "1234")

Character.create(name: "Finn", picture: "https://steamuserimages-a.akamaihd.net/ugc/93850193080369520/61C4021F25F147CAC23590E08DEC803545FB94F0/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", dead: false, user_id: 1)
Character.create(name: "Jake", picture: "https://i.pinimg.com/474x/55/a4/7d/55a47db20466ebc57636c8f159d69639.jpg", dead: false, user_id: 1)

Item.create(name: "Fake chalice", value: 25, character_id:1)
Item.create(name: "Cheap chalice", value: 250, character_id:1)
Item.create(name: "Ruby chalice", value: 50, character_id:2)
Item.create(name: "Special chalice", value: 10000, character_id:2)