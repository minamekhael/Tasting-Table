class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :ingredients, null: false
      t.text :instruction, null: false
      t.string :image, default: 'https://media.glamour.com/photos/5859a5d2d42240f820440ce6/master/w_1600%2Cc_limit/RASPBERRY%252520AND%252520PEACH%252520SMOOTHIE%252520BOWL%252520thefeedfeed.com.jpg'

      t.timestamps
    end
  end
end
