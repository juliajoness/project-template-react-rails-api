class SessionController < ApplicationController
    def create
        user_to_find_login= User.find_by(username: params[:username] )
        if user_to_find_login 
            
            if user_to_find_login.authenticate(  params[:password])
                session[:user_id] = user_to_find_login.id
               # byebug 

                render json: user_to_find_login, status: :ok
            else
                render json: {error: "Check password"}
            end
        
        else
            render json: {error: "Username OR Password Doesn't Exist"}
        end
    end

    def get_logged_in_user
        user_already_logged_in = User.find_by(id: session[:user_id])
    
        render json: user_already_logged_in
    
    end
end