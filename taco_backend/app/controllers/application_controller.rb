class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticity_token
    before_action :authenticated

    def current_user
        if session[:user_id]
            @user = User.find(session[:user_id])
        else
            # nil
        end
    end

    def logged_in?
        !current_user
    end

    def authenticated
        # render json: 'authenticate is successful'
        
    end

end
