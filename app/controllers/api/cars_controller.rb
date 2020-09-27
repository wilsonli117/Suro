class Api::CarsController < ApplicationController

    def index
        @cars = Car.all
        render :index
    end

    def show
        @car = Car.find(params[:id])
        render :show
    end

    def create
        @car = Car.new(car_params)

        if @car.save 
            render :show
        else 
            render json: ["Error"], status: 422
        end

    end

    def update
        @car = Car.find(params[:id])
        
        if @car.update 
            render :show
        else 
            render json: ["Error"], status: 422
        end

    end

    def destroy
        @car = Car.find(params[:id])
        @car.destroy
        render :show
    end

    private 

    def car_params 
        params.require('car').permit(:owner_id, :address, :city, :state, :longitude, :latitude, :year, :make, :model, :price, :description, :hp, :mpg, :fuel_type, :doors, :seats)
    end
end