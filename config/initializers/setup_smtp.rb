mock_smtp_indicator = Rails.root + 'tmp/mock_smtp.txt'

if mock_smtp_indicator.exist?
  ActionMailer::Base.smtp_settings = {
    address: 'localhost',
    port: 1025,
    domain: 'katalyst.com.au'
  }
elsif Rails.env.production?
  ActionMailer::Base.smtp_settings = {
    address: Figaro.env.smtp_address,
    port: Figaro.env.smtp_port,
    authentication: :plain,
    user_name: Figaro.env.smtp_username,
    password: Figaro.env.smtp_password
  }
else
  ActionMailer::Base.smtp_settings = {
    user_name: Figaro.env.mailtrap_username,
    password: Figaro.env.mailtrap_password,
    address: 'smtp.mailtrap.io',
    domain: 'smtp.mailtrap.io',
    port: '2525',
    authentication: :cram_md5,
    enable_starttls_auto: true
  }
end
