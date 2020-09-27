class Api::FeaturesController < ApplicationController 

    def index
        @features = Feature.all
        render :index
    end

end