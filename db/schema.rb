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

ActiveRecord::Schema.define(version: 20181102034764) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", id: :serial, force: :cascade do |t|
    t.string "email"
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "locked_at"
    t.string "first_name"
    t.string "last_name"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "assets", id: :serial, force: :cascade do |t|
    t.string "data_uid"
    t.string "data_name"
    t.string "type"
    t.integer "attribute_ordinal"
    t.string "attribute_name"
    t.integer "attributable_id"
    t.string "attributable_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
  end

  create_table "friendly_id_slugs", id: :serial, force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 40
    t.datetime "created_at"
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type", unique: true
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "nav_items", id: :serial, force: :cascade do |t|
    t.string "type"
    t.string "title"
    t.string "url"
    t.string "admin_url"
    t.string "key"
    t.boolean "is_hidden"
    t.integer "alias_id"
    t.integer "parent_id"
    t.integer "lft"
    t.integer "rgt"
    t.text "if"
    t.text "unless"
    t.text "method"
    t.text "highlights_on"
    t.text "content_block"
    t.integer "navigable_id"
    t.string "navigable_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_mobile", default: false
    t.string "setting_prefix"
    t.boolean "link_to_first_child"
    t.index ["navigable_id"], name: "index_nav_items_on_navigable_id"
    t.index ["navigable_type"], name: "index_nav_items_on_navigable_type"
    t.index ["url"], name: "index_nav_items_on_url"
  end

  create_table "pages", id: :serial, force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_pages_on_slug", unique: true
  end

  create_table "reports", id: :serial, force: :cascade do |t|
    t.integer "visits"
    t.integer "unique_pageviews"
    t.integer "pageviews"
    t.float "pageviews_per_visit"
    t.float "avg_time_on_site"
    t.float "visit_bounce_rate"
    t.integer "new_visits"
    t.integer "organic_searches"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "taggings", id: :serial, force: :cascade do |t|
    t.integer "tag_id"
    t.string "taggable_type"
    t.integer "taggable_id"
    t.string "tagger_type"
    t.integer "tagger_id"
    t.string "context", limit: 128
    t.datetime "created_at"
    t.index ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true
    t.index ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context"
    t.index ["taggable_type", "taggable_id"], name: "index_taggings_on_taggable_type_and_taggable_id"
    t.index ["tagger_type", "tagger_id"], name: "index_taggings_on_tagger_type_and_tagger_id"
  end

  create_table "tags", id: :serial, force: :cascade do |t|
    t.string "name"
    t.integer "taggings_count", default: 0
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "translations", id: :serial, force: :cascade do |t|
    t.string "locale", default: "en"
    t.string "label"
    t.string "key"
    t.text "value"
    t.text "interpolations"
    t.string "role"
    t.string "field_type", default: "string"
    t.string "hint"
    t.boolean "is_proc", default: false
    t.boolean "is_required", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "prefix"
    t.string "file_uid"
    t.string "file_name"
    t.text "serialized_value"
    t.string "group"
    t.index ["locale", "prefix", "key"], name: "index_translations_on_locale_and_prefix_and_key", unique: true
  end

  create_table "url_rewrites", id: :serial, force: :cascade do |t|
    t.text "from"
    t.text "to"
    t.boolean "active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
