class BusinessesUsersController < ApplicationController
    def create
        favorite = BusinessesUser.create!(business_id: params[:business_id], user_id: session[:user_id])
        render json: favorite, status: 201
    end

    def show
        render json: @businesses_user #serializer:DrugstoreShowSerializer
    end
end

