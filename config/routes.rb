Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources "users"
  get 'signup', to: 'users#new', as: 'signup'

end
