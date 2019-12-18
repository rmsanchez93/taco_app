class TacotrucksController < ApplicationController
    def index
        @tacotrucks = Tacotruck.all
        render json: @tacotrucks
    end

    def create
        @tacotruck = Tacotruck.create(tacotruck_params)
        puts 'creating'
        render json: @tacotruck
    end

    def new
        @user = Tacotruck.new(tacotruck_params)
    end

    def edit
        # selected_user = User.find(params[:id])
        # render json: selected_user
    end

    def show
        tacotruck = Tacotruck.find(params[:id])
        render json: tacotruck

    end

    def update

        selected_user = User.find(params[:id])
        render json: "this is your user #{selected_user.name}"
    end

    def destroy
        'destroyin'
    end
    
    def tacotruck_params
        params.require(:tacotruck).permit(:name, :address, :phone)
    end
end
