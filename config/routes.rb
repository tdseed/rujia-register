Rails.application.routes.draw do
	scope :qrcode do
	  root to: "users#new"
	  
	  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
	  
	  get 'signup', to: 'users#new', as: 'signup'

	  resources :users, only: [:create] do
	    collection do
	      get :check_phone
	    end
	  end
	end

end
