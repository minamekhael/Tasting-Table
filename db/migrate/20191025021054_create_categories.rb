class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.references :recipe
      t.string :meal_time

      t.timestamps
    end
  end
end
