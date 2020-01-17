class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :authenticated

    def current_user
        if session[:user_id]
            @user = User.find(session[:user_id])
        else
            # nil
            render json: 'we are not logged in'
        end
    end

    def logged_in?
        !current_user.nil?
    end

    def authenticated
        if logged_in?
            # auth for when user is logged
            # JWT here?
            puts 'we are logged in'
        else
            # auth for when there is no session 
            render json: 'we are not logged in'
        end
        
    end

end
