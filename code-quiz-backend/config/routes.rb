Rails.application.routes.draw do
  resources :questions
  resources :users
  get '/test', to: 'application#test'
 
  
end
