Rails.application.routes.draw do
  
  resources :categories
  resources :steps
  resources :users, only: [:index, :show, :create, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post 'users', to: 'users#create'
  
  post "login", to: "session#create"
  get "userInSession", to: "session#get_logged_in_user"
  get 'authorized', to: 'users#show'

  delete "/logout", to: "session#destroy"

  get "/profile", to: "profile#index"
  get "/categories", to: "categories#index"
  
  post '/steps', to: "steps#create"
  get '/steps/:id', to: "steps#index"
  
  delete '/steps', to: "steps#destroy"

  patch '/users/:id', to: "users#update"

  get "/steps/:id", to: "steps#show"
end
