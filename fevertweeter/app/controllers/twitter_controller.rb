class TwitterController < ApplicationController
  require 'twitter'

  def index
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["consumer_key"]
      config.consumer_secret     = ENV["consumer_secret"]
      config.access_token        = ENV["consumer_access_token"]
      config.access_token_secret = ENV["consumer_token_secret"]
    end
    searchterm=params[:s]
    geo="#{params[:lat]},#{params[:long]},#{params[:radius]}mi"
    search = client.search(searchterm, {:geocode =>geo}).take(1000)

    render json: search
  end
end
