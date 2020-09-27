class Cars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.integer :owner_id, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.integer :year, null: false
      t.string :make, null: false
      t.string :model, null: false
      t.string :price, null: false
      t.text :description, null: false
      t.integer :hp, null: false
      t.integer :mpg, null: false
      t.string :fuel_type, null: false 
      t.integer :doors, null: false 
      t.integer :seats, null: false 
       
      t.timestamps 
    end
    
  add_index :cars, :owner_id
  add_index :cars, :longitude
  add_index :cars, :latitude
  add_index :cars, :make
  add_index :cars, :price
  add_index :cars, :hp

    create_table :features do |t|
      t.string :name, null: false

      t.timestamps 
    end

    create_table :car_features do |t|
      t.integer :car_id, null: false 
      t.integer :feature_id, null: false 
      
      
      t.timestamps
    end

  add_index :car_features, [:car_id, :feature_id], unique: true 

  end
end
