class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        #Save a new user to the database with their username, encrypted password
        user = User.create!(user_params)
        #Save the user's ID in the session hash
        session[:user_id] = user.id
        #Return a JSON response with the user's ID, username
        # and an HTTP status code of 201 (Created)
        render json: user, status: :created
    end

    def show
      render json: @current_user
    end
    
    private
    
    def user_params
      params.permit(:username, :password)
    end

end
