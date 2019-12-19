class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.new(user_params)
            if @user.valid?
                @user.save
                render json: @user
            else
                render json: 'could not create user'
            end
        # @user = User.create(user_params)
        # puts 'creating'
        # render json: @user
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
    
    private
    def user_params

        params.require(:user).permit(:name, :email, :phone, :member_since, :password, :password_confirmation)
    end

    

end
