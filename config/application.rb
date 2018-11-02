require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FringeV2
  class Application < Rails::Application
      #
  # Uncomment this block if your application required Cross Origin Resource Sharing.
  # Allows specified resources to be accessed from another domain
  # You will nee to add the following to the gem file and bundle
  #   gem 'rack-cors', require: 'rack/cors'
  # See https://github.com/cyu/rack-cors for more details
  #
  # config.middleware.insert_before 0, "Rack::Cors" do
  #   allow do
  #     # This should be made more restrictive, as * allows access from all domains
  #     origins '*'
  #
  #     # Change the path to the required access endpoint
  #     resource '/path/to/endpoint',
  #       :headers => :any,
  #       :methods => [:get, :options],
  #       :credentials => true,
  #       :max_age => 0
  #
  #   end
  # end

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
