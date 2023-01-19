class StepsController < ApplicationController

    def index
        render json: Step.all, status: :ok
    end

    def create
        step_new = Step.new(new_step_params)
        step_new.user = current_user
        if step_new.save
            render json: step_new
        else
            render json: {"errors": "missing form field"}
        end
    end

    def destroy
        step = Step.find_by(id: params[:id])
        if step

        else
            render json: { error: "step not found" }, status: :not_found
        end
    end

    private

    def new_step_params
        params.permit(:step_count, :date)
    end

end

