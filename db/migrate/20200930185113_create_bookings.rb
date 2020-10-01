class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :car_id, null: false
      t.boolean :status, null: false, default: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false

      t.timestamps
    end

    add_index :bookings, :user_id
    add_index :bookings, :car_id

    change_column_null :cars, :price, true
  end
end
