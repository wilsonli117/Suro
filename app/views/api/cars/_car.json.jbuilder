json.set! car.id do 
    json.id car.id
    json.ownerId car.owner_id
    json.longitude car.longitude
    json.latitude car.latitude
    json.year car.year
    json.make car.make 
    json.model car.model
    json.price car.price
    json.description car.description
    json.hp car.hp
    json.fuel_type car.fuel_type
    json.numDoors car.doors
    json.numSeats car.seats
    json.photoURLs car.photos.map { |photo| url_for(photo) }
    json.featureIDs car.features.pluck(:id)
end