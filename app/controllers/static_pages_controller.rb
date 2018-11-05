class StaticPagesController < ApplicationController
  def show
    render template: "static_pages/#{params[:view]}" #, layout: false
  end
end