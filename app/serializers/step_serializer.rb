class StepSerializer < ActiveModel::Serializer
  attributes :id, :step_count, :date
  has_one :user
end
