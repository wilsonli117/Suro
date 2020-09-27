class ChangePriceFormatInCarsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :cars, :price
    add_column :cars, :price, :integer
    add_index :cars, :price
  end
end
