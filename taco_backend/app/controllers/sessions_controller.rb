class SessionsController < ApplicationController
    skip_before_action :authenticated, only: [:new, :create]

    def new
    end

    def create
        @user = User.find_by(name: params[:name])

        if @user.authenticated(params[:password])
            session[:user_id] = @user.user_id
            render json: @user
        else
            render json: 'could not authenticate user'
        end
    end

    def destroy
        session.delete(:user_id)
    end
end
