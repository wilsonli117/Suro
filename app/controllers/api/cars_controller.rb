class Api::CarsController < ApplicationController

    def index
        startdate = Date.parse(params[:dates][:startDate])
        enddate = Date.parse(params[:dates][:endDate])

        @cars = Car.includes(:bookings).in_bounds(params[:bounds]).select { |car| car.available?(startdate, enddate) }
        
        #more filters to come here
        render :index
    end

    def show
        @car = Car.includes(:bookings).find(params[:id])

        if @car 
            render :show
        else 
            render json: ["Car not found"], status: 404
        end
        
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
        
        if @car.update(car_params) 
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
        params.require(:car).permit(:owner_id, :address, :city, :state, :longitude, :latitude, :year, :make, :model, :price, :description, :hp, :mpg, :fuel_type, :doors, :seats)
    end

end