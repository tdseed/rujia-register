Rails.application.routes.draw do
  root to: "users#new"
  
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  get 'signup', to: 'users#new', as: 'signup'
  get 'success', to: 'users#success'

  resources :users, only: [:create] do
    collection do
      get :check_phone
      # get :ajax_get
    end
  end

  # resources :users do
  #   collection do
  #     get :check_phone
  #     get :ajax_get
  #   end
  # end
  
end
