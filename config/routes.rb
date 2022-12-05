Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  resources :items
  # resources :users, only: [:index, :show, :create]
  resources :watches, only: [:index, :show, :create, :destroy]
  resources :comments

  post "/login", to: "sessions#create"
  get '/authorized_user', to: 'users#show'
  delete "/logout", to: "sessions#destroy"
  get '/items/:category_key/:value', to: 'items#index'
  post '/signup', to: 'users#create'

  resources :users, only: [:index, :show, :create] do
    resources :watches
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end