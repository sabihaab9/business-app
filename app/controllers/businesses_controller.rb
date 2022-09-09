class BusinessesController < ApplicationController
    before_action :find_business, except: [:index, :create]

    def index
        all = Business.all
        render json: all
      end

    def show
        render json: @business # serializer: DrugstoreShowSerializer
    end

    def destroy
        @business.destroy
        head :no_content, status: :accepted
    end

    def create
        business = Business.create!(business_params)
        render json: business, status: 201
      end

    def update
        @business.update!(business_params)
        render json: @business, status: :accepted
    end

    private

    def business_params
      params.permit(:name, :address, :phone_number)
    end

end