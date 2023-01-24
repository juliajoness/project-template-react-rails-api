class StepCategory < ApplicationRecord
  belongs_to :step
  belongs_to :category
end
