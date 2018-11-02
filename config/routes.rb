Rails.application.routes.draw do
  
  get '/styleguide' => 'styleguide#index'
  get '/styleguide/:action' => 'styleguide'
  # PWA Routes
  get '/site' => 'service_worker#webmanifest', format: :webmanifest, as: :webmanifest
  get '/service-worker' => 'service_worker#index', format: :js, as: :service_worker
  resources :uploads do
    post :image, on: :collection
  end
  get 'hello_world', to: 'hello_world#index'
  resources :documents, only: [:show]
  resources :images, only: [:show]
  resources :assets, only: [:show]
  resources :pages, only: [:show], as: :koi_pages
  root to: 'pages#index'
  mount Koi::Engine => "/admin", as: "koi_engine"
  get "/:id"  => "pages#show", as: :page
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
