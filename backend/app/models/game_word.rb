class GameWord < ApplicationRecord
  belongs_to :game_session
  belongs_to :word
end
