Rails.application.routes.draw do
  resources :items, only: :index
  resources :users, only: [:index, :show, :create]
  resources :watches, only: [:index, :show, :create, :destroy]
  resources :comments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
