class TwitterController < ApplicationController
  require 'twitter'

  def index
    client = Twitter::REST::Client.new do |config|
      
    end
    searchterm=params[:s]
    geo="#{params[:lat]},#{params[:long]},#{params[:radius]}mi"
    search = client.search(searchterm, {:geocode =>geo}).take(1000)

    render json: search
  end
end
