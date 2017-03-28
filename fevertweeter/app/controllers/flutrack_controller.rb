class FlutrackController < ApplicationController
  require 'rest_client'

  def index
    render json: RestClient.get("http://api.flutrack.org/?s=#{params[:s]}")
  end
end
