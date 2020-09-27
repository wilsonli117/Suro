class AddVinColumnToCarsTable < ActiveRecord::Migration[5.2]
  def change  
    add_column :cars, :vin, :string, null: false, unique: true
  end
end
