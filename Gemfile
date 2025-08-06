source "https://rubygems.org"
ruby "3.3.4"

gem "rails", "~> 8.0.0"
gem "propshaft"
gem "pg", "~> 1.1"
gem "puma", ">= 5.0"
gem "tzinfo-data", platforms: %i[ windows jruby ]

# Rails 8 features
gem "solid_cache"
gem "solid_queue"

# Reduces boot times through caching
gem "bootsnap", require: false

# Authentication
gem "devise"
gem "devise-i18n"

# Vite & Inertia
gem "vite_ruby"
gem "vite_rails"
gem "inertia_rails"
gem "inertia_rails-contrib"

# API calls
gem "rest-client"

# Utilities
gem "enumerize"
gem "image_processing", "~> 1.2"

group :development, :test do
  gem "rspec-rails"
  gem "factory_bot_rails"
  gem "pry-byebug"
  gem "debug", platforms: %i[ mri windows ]
  gem "js_from_routes"
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
end

group :development do
  gem "rails-erd"
end

group :development do
  gem "web-console"
  gem "letter_opener"
  gem "better_errors"
  gem "binding_of_caller"
end