class CreateStepCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :step_categories do |t|
      t.belongs_to :step, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
