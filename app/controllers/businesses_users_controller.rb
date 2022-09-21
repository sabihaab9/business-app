class BusinessesUsersController < ApplicationController

skip_before_action :authorize, only: [:create, :show, :destroy]

    def create
        favorite = BusinessesUser.create!(business_id: params[:business_id], user_id: params[:user_id])
        render json: favorite, status: 201
    end

    def show
        render json: @businesses_user #serializer:DrugstoreShowSerializer
    end

    def destroy
        fav = BusinessesUser.find_by!(business_id: params[:business_id], user_id: params[:user_id])
        fav.destroy
        render json: fav
    end


end

