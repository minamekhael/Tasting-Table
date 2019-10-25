# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191025041348) do

  create_table "categories", force: :cascade do |t|
    t.integer  "recipe_id"
    t.string   "meal_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_categories_on_recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string   "name",                                                                                                                                                                                          null: false
    t.text     "ingredients",                                                                                                                                                                                   null: false
    t.text     "instruction",                                                                                                                                                                                   null: false
    t.string   "image",       default: "https://media.glamour.com/photos/5859a5d2d42240f820440ce6/master/w_1600%2Cc_limit/RASPBERRY%252520AND%252520PEACH%252520SMOOTHIE%252520BOWL%252520thefeedfeed.com.jpg"
    t.datetime "created_at",                                                                                                                                                                                    null: false
    t.datetime "updated_at",                                                                                                                                                                                    null: false
  end

end
