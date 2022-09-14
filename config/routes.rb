Rails.application.routes.draw do
  
  resources :businesses
  resources :admins
  resources :users, only: [:create, :show]

  # HTTP VERB | URL | CONTROLLER | ACTION
  
  post "/signup", to: "users#create"

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'sessions#show'
  
  get '/auth', to: 'users#show'

  get '/biz/:category', to: 'businesses#show_cat'

  get 'users/:id', to: 'users#show'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
