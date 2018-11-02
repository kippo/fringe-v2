on_app_servers do
  sudo "monit restart all -g fringe_v2_sidekiq"
end
