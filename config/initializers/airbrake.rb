Airbrake.configure do |config|
  config.project_key         = Figaro.env.airbrake_project_key
  config.project_id          = Figaro.env.airbrake_project_id
  config.host                = Figaro.env.airbrake_host
  config.environment         = Rails.env
  config.ignore_environments = %w(development test)
end

class Airbrake::Sender
  def json_api_enabled?
    true
  end
end
