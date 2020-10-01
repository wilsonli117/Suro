json.set! @booking.id do 
    json.id @booking.id
    json.renterId @booking.user_id
    json.hostId @booking.host.id
    json.carId @booking.car_id
    json.status @booking.status
    json.startDate @booking.start_date.to_s
    json.endDate @booking.end_date.to_s
end
