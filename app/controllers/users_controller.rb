class UsersController < ApplicationController
    
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create

    def create 
        new_user = User.new(user_create_params)
        if new_user.valid?
            new_user.save
            session[:user_id] = new_user.id
            render json: new_user, status: :ok
        else
            render json: { error: new_user.errors.full_messages}
        end

        def index
            users = User.all
            render json: users
        end
    
        def show 
            user_found = User.find_by(id: params[:id])
            render json: user_found
        end 

    end


    private 

    def user_create_params
        params.permit(:username, :password, :email)
    end

    def user_unable_to_create( the_invalid_user_exception)
        render json: {errors: the_invalid_user_exception.record.errors.full_messages}
    end

    def user_not_found
        render json: {error: "User Not Found"}
    end

end
