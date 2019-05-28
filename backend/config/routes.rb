Rails.application.routes.draw do
  resources :game_words
  resources :words
  resources :game_sessions
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
