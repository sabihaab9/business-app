class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid


  def current_user
    @current_user ||= session[:user_id] && User.find_by_id(session[:user_id]) #memorization
    #@current_user = User.find_by_id(session[:user_id]
  end

  def favorites 
    @current_user.businesses_users
  end



  private

  def find_business
    @business = Business.find(params[:id])
  end

  def find_businesses_user
    @businesses_user = Businesses_User.find(params[:id])
  end

  def authorize
    # @current_user = User.find_by_id(session[:user_id])
    render json: { errors: {User: "Not Authorized"}}, status: :unauthorized unless current_user #checking if user is logged in only
  end

  def record_not_found(error)
    render json: { error: "#{error.model} not found" }, status: 404
  end

  def record_invalid(error)
    render json: { errors: error.record.errors.full_messages }, status: 422
  end

end