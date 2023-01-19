class StepsController < ApplicationController

    def create
        step_new = Step.new(new_step_params)
        step_new.user = current_user
        if step_new.save
            render json: step_new
        else
            render json: {"errors": "missing form field"}
        end
    end

    private

    def new_step_params
        params.permit(:step_count, :date)
    end

end

