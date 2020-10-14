Rails.application.routes.draw do
  resources :quizzes
  resources :questions
  resources :users
  get '/test', to: 'application#test'
 
  
end
