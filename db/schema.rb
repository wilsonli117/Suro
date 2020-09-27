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

ActiveRecord::Schema.define(version: 2020_09_27_210347) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "car_features", force: :cascade do |t|
    t.integer "car_id", null: false
    t.integer "feature_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["car_id", "feature_id"], name: "index_car_features_on_car_id_and_feature_id", unique: true
  end

  create_table "cars", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.integer "year", null: false
    t.string "make", null: false
    t.string "model", null: false
    t.text "description", null: false
    t.integer "hp", null: false
    t.integer "mpg", null: false
    t.string "fuel_type", null: false
    t.integer "doors", null: false
    t.integer "seats", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "vin", null: false
    t.integer "price"
    t.index ["hp"], name: "index_cars_on_hp"
    t.index ["latitude"], name: "index_cars_on_latitude"
    t.index ["longitude"], name: "index_cars_on_longitude"
    t.index ["make"], name: "index_cars_on_make"
    t.index ["owner_id"], name: "index_cars_on_owner_id"
    t.index ["price"], name: "index_cars_on_price"
  end

  create_table "features", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
