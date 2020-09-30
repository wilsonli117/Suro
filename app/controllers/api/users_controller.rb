class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        
        if @user 
            render :show
        else 
            render json: ['User not found'], status: 404
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else 
            render json: ['Email address already in use'], status: 422
        end

    end

    private

    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password)
    end

end