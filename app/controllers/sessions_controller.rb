class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :show, :destroy]

  def index
    render json: Session.all
  end

  def create # our login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "Invalid username or password" }, status: 401
    end
  end

  def show # /me
    # def user_favorites
    #   self.user_businesses
  #   current_user, methods: [:favorites]
    #user = User.find_by(id: session[:user_id]), methods: [:businesses_users]
   # render json: user
  #end
    if current_user
      #  user = current_user, methods: [:businesses_users]
      render json: current_user
    else
      render json: { message: "Not logged in" }, status: 401
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
  
end
