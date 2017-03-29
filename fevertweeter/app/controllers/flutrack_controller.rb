class FlutrackController < ApplicationController
  require 'rest_client'
  require 'twitter'

  def index
    render json: RestClient.get("http://api.flutrack.org/?time=7")
  end
end
