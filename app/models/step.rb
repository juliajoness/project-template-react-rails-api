class Step < ApplicationRecord
  belongs_to :user
  has_many :step_categories
  has_many :categories, through: :step_categories
end
