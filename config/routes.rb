Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  resources :items
  resources :users, only: [:index, :show, :create]
  resources :watches, only: [:index, :show, :create, :destroy]
  resources :comments

  post "/login", to: "sessions#create"
  get '/authorized_user', to: 'users#show'
  delete "/logout", to: "sessions#destroy"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end