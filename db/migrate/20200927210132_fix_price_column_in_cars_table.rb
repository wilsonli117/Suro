class FixPriceColumnInCarsTable < ActiveRecord::Migration[5.2]
  def change

    remove_column :cars, :price
    add_column :cars, :price, :integer, presence: true
    add_index :cars, :price

  end
end
