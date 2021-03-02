class Api::BookingsController < ApplicationController

    def show
        @booking = Booking.find_by(params[id: params[:id]])
   
        if @booking 
            render :show
        else 
            render json: ["Booking not found"], status: 404
        end
    end

    def create
        @booking = Booking.new(booking_params)
        
        if @booking.save
            render :show
        else 
            render @booking.errors.full_messages, status: 422
        end

    end
    
    def update
        @booking = Booking.find(params[:id])

        if @booking.update(booking_params)
            render :show
        else 
            render json: ["Error"], status: 422
        end
        
    end

    def delete
        @booking = Booking.find(params[:id])
        @booking.destroy
        render :show
    end


    private 

    def booking_params 
        params.require('booking').permit(:user_id, :car_id, :status, :start_date, :end_date)
    end

end