class Word < ApplicationRecord
  has_many :game_words
  has_many :game_sessions, through: :game_words
end
