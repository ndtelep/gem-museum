class SessionsController < ApplicationController
  skip_before_action :authorized_user
  wrap_parameters format: []

  def create
      user = User.find_by(email:params[:email])
      # user && user.authenticate....)
      if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
      else
          render json: {errors: "Invalid Password or Username"}
      end 
  end 

  def destroy
      session.delete(:user_id)
      head :no_content 
  end 
end