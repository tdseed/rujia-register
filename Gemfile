# source 'https://rubygems.org'
source 'https://ruby.taobao.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.1'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# # Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.0'
# # bundle exec rake doc:rails generates the API under doc/api.
# gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Gon - 在向浏览器JS runtime传递Rails variables
gem 'gon'

# Bootstrap
gem 'bootstrap-sass', '~> 3.1.0'

#font
gem "font-awesome-rails"

#dashboard
gem "rails_admin"

group :development, :test do
	# Use Capistrano for deployment
	gem 'capistrano', '~> 3.1.0'
	gem 'capistrano-rails', '~> 1.1'
	gem 'capistrano-rvm'
	gem 'capistrano-bundler', '>= 1.1.2'
	gem 'capistrano-ext'
	gem 'capistrano3-puma'

	gem 'pry'
	gem 'pry-nav'
	gem 'factory_girl_rails'

	# # 开发模式下浏览器实时更新
	# gem 'rb-fsevent'
	# gem 'guard-livereload'

	# gem "better_errors"
	# gem "binding_of_caller"
end

group :production do
  gem 'mysql2'
  gem 'puma'
end
