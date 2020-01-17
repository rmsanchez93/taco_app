class SessionsController < ApplicationController
    skip_before_action :authenticated, only: [:new, :create]

    def new
        render json: 'you hit the login route'
    end

    def create
        @user = User.find_by(email: params[:email])
        # byebug
        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: @user, :except => [:created_at, :updated_at]
        else
            render json: "incorrect email or password"
        end
    end

    def destroy
        puts session[:user_id]
        # byebug
        session.delete(:user_id)
        render json: 'logged out successful'
    end
end
