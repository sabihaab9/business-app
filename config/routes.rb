Rails.application.routes.draw do
  
  resources :businesses
  resources :users, only: [:create, :show]

  # HTTP VERB | URL | CONTROLLER | ACTION
  post "/create", to: "businesses#create"

  # delete "/businesses/:id", to: "businesses#destroy"

  patch "/edit/:business_id", to: "businesses#update"
  
  post "/signup", to: "users#create"

  post '/login', to: 'sessions#create'

  post '/favorites', to: 'businesses_users#create'

  get '/favorites', to: 'businesses_users#show'
  
  delete '/favorites/:id/:user_id', to:'businesses_users#destroy'

  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'sessions#show'

  
  # get '/users/:id', to: 'users#show'

  get '/biz/:category', to: 'businesses#show_cat'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
