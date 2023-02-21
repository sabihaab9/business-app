class UsersController < ApplicationController
    # skip_before_action :verify_authenticity_token
    skip_before_action :authorize, only: [:create, :show]

    
    #def add_favorite_to_user 
     #   user = User.find_by(id: session[:user_id])
     #   puts user 
    #end

    
    def index
      users = User.all
      render json: users
    end

    def create
        #Save a new user to the database with their username, encrypted password
        user = User.create!(user_params)
        #Save the user's ID in the session hash
        session[:user_id] = user.id
        #Return a JSON response with the user's ID, username
        # and an HTTP status code of 201 (Created)
        render json: user, status: :created, methods: [:favorites]
    end

    def show
      user = User.find_by(id: params[:id]).to_json(methods: [:businesses])
      render json: user
    end

    
    private
    
    def user_params
      params.permit(:username, :password)
    end

end

