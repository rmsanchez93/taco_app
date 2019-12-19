class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.create(user_params)
        puts 'creating'
        render json: @user
    end

    def new
        @user = User.new(user_params)
    end

    def edit
        selected_user = User.find(params[:id])
        render json: "this is your user #{selected_user}"
    end

    def show
        puts 'showing'
    end

    def update

        selected_user = User.find(params[:id])
        render json: "this is your user #{selected_user.name}"
    end

    def destroy
        'destroyin'
    end
    
    def user_params
        
        params.require(:user).permit(:name, :email, :phone, :member_since)
    end

    

end
