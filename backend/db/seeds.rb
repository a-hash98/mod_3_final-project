require 'net/http'
require 'json'


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

url = 'https://raw.githubusercontent.com/words/an-array-of-english-words/master/words.json'
uri = URI(url)
response = Net::HTTP.get(uri)
words = JSON.parse(response).select{|w| w.length >= 4}

words.each do |word|
    Word.create(word: word)
end

# #word1 = Word.create(word: "serendipity")
# #word2 = Word.create(word: "pathos")

user1 = User.create(name: "Ayesha")
user2 = User.create(name: "Harriet")

game1 = GameSession.create(user: user1)
game2 = GameSession.create(user: user2)

gameword1 = GameWord.create(word: word1, game_session: game1)
gameword2 = GameWord.create(word: word2, game_session: game2)
gameword3 = GameWord.create(word: word2, game_session: game1)

