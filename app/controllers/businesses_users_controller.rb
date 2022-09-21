scheclass BusinessesUsersController < ApplicationController

skip_before_action :authorize, only: [:create, :show, :destroy]

    def create
        favorite = BusinessesUser.create!(business_id: params[:business_id], user_id: params[:user_id])
        render json: favorite, status: 201
    end

    def show
        render json: @businesses_user #serializer:DrugstoreShowSerializer
    end

    def destroy
        puts params[:id]
        puts params[:user_id]
        fav = BusinessesUser.find_by!(business_id: params[:id], user_id: params[:user_id])
        puts "FAV"
        fav.destroy
        # fav = BusinessesUser.destroy_by(business_id: params[:id], user_id: params[:user_id])
        render json: fav
    end


end

