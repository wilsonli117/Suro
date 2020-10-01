class RemoveDefaultFromStatusColumnBookingsTable < ActiveRecord::Migration[5.2]
  def change

    change_column_default :bookings, :status, nil
  end
end
