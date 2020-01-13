class ReviewsController < ApplicationController
    def index
        @reviews = Review.all 
        render json: @reviews, :except => [:created_at, :updated_at]
    end

    def new
        @review = Review.new(review_params)
    end
    
    def create
        @review = Review.create(review_params)
        render json: @review, :except => [:created_at, :updated_at]

    end


    private
    def review_params
        params.require(:review).permit(:user_id, :tacotruck_id, :review, :rating)
    end
end
