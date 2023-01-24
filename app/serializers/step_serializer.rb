class StepSerializer < ActiveModel::Serializer
  attributes :id, :step_count, :date
  has_one :user
  has_many :categories

  def step_count 
    return "#{self.object.step_count} paces"
  end
end
