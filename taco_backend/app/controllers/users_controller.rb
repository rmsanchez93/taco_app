class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.new(user_params)
        # byebug
        if @user.valid?
            @user.save
            # when User is validated and saved lets go to session object and add 
            session[:user_id] = @user.id
            render json: @user
        else
            render json: @user.errors.messages
        end
   
    end

    def new
        @user = User.new(user_params)
    end

    def edit
        selected_user = User.find(params[:id])
        render json: "this is your user #{selected_user}"
    end
    
    def show
        selected_user = User.find(params[:id])
        render json: selected_user,:except=> [:created_at, :updated_at], :include => [:reviews]
    end

    def update

        selected_user = User.find(params[:id])
        if selected_user  
            User.update(user_params)
        end
        render json: "this is your updated user #{selected_user.name}"
    end

    def destroy
        @user_to_be_deleted = User.find_by(id: params[:id])
        @user_to_be_deleted.destroy
        render json: 'user has been deleted'
    end

    private
    
    def user_params
        params.require(:user).permit(:name, :email, :phone, :address, :city, :state, :password, :user_name)
    end

    

end
