class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create

  before_action :authorized_user

  def current_user
    User.find_by(id:session[:user_id])
  end

  def authorized_user
    render json: {error: "Not authorized"}, status: :unauthorized unless current_user 
  end

  private

  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

   def render_not_found(error)
      render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end 

end
