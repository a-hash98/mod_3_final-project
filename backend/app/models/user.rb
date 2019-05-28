class User < ApplicationRecord
    has_many :game_sessions
    has_many :words, through: :game_sessions
end
