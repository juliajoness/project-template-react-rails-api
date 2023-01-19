Rails.application.routes.draw do
  
  resources :steps
  resources :users, only: [:index, :show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post 'users', to: 'users#create'
  
  post "login", to: "session#create"
  get "userInSession", to: "session#get_logged_in_user"
  get 'authorized', to: 'users#show'

  delete "/logout", to: "session#destroy"
  
end
