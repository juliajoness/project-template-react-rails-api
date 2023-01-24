class StepCategoriesController < ApplicationController
    def create 
        step_category_new = StepCategory.new(step_category_params)
        if step_category_new.save
            render json: step_category_new.category
        else
            render json: {"errors": "error"}, status: 422
        end

    end

    private 
    
    def step_category_params
        params.permit(:step_id, :category_id)
    end
end
