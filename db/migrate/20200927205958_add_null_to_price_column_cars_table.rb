class AddNullToPriceColumnCarsTable < ActiveRecord::Migration[5.2]
  def change
    change_column_null :cars, :price, true
  end
end
