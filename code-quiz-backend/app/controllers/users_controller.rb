class UsersController < ApplicationController
     def index 
        users = User.all 
        render json: users
     end 

    def create
        user = User.create(name: params[:user][:name], email: params[:user][:email])
        session[:id] = user.id
        render json: user
    end 
end
