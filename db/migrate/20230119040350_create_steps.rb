class CreateSteps < ActiveRecord::Migration[6.1]
  def change
    create_table :steps do |t|
      t.integer :step_count
      t.integer :date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
