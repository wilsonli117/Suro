json.set! @user.id do
    json.id @user.id
    json.email @user.email
    json.firstName @user.first_name
    json.lastName @user.last_name
    json.createdAt @user.created_at
    json.bookingIdsAsRenter @user.bookings_as_renter.pluck(:id)
    json.bookingIdsAsHost @user.bookings_as_host.pluck(:id)
end