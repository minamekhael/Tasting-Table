class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :ingredients, null: false
      t.text :instruction, null: false
      t.string :image, default: 'http://clipart-library.com/images/AibKK8j8T.png'

      t.timestamps
    end
  end
end
