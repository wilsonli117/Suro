# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Feature.create(name: "All-wheel drive") #1
Feature.create(name: "Android Auto") #2
Feature.create(name: "Apple CarPlay") #3
Feature.create(name: "AUX input") #4
Feature.create(name: "Backup camera") #5
Feature.create(name: "Bike rack") #6
Feature.create(name: "Blind spot warning") #7
Feature.create(name: "Bluetooth") #8
Feature.create(name: "Child seat") #9
Feature.create(name: "Convertible") #10
Feature.create(name: "GPS") #11
Feature.create(name: "Heated Seats") #12
Feature.create(name: "Keyless entry") #13
Feature.create(name: "Pet friendly") #14
Feature.create(name: "Ski rack") #15
Feature.create(name: "Snow tires or chains") #16
Feature.create(name: "Sunroof") #17
Feature.create(name: "Toll pass") #18
Feature.create(name: "USB charger") #19
Feature.create(name: "USB input") #20
Feature.create(name: "Wheelchair accessible") #21

User.create(first_name: "Lewis", last_name: "Hamilton", email: "demo@gmail.com", password: "asdf123")
User.create(first_name: "Sebastian", last_name: "Vettel", email: "svettel@gmail.com", password: "asdf123")
User.create(first_name: "Wilson", last_name: "Li", email: "ligokdoon@gmail.com", password: "asdf123")
User.create(first_name: "Michael", last_name: "Schumacher", email: "mschumacher@gmail.com", password: "asdf123")
User.create(first_name: "Devin", last_name: "Booker", email: "dbook@gmail.com", password: "asdf123")
User.create(first_name: "Karl-Anthony", last_name: "Towns", email: "kat@gmail.com", password: "asdf123")
User.create(first_name: "Eevy", last_name: "Li", email: "eevy@gmail.com", password: "asdf123")


SLS = Car.create(owner_id: 1, address: "610 East 11th Street", city: "New York", state: "NY", longitude: -73.9809976, latitude: 40.7270074, year: 2014, make: "MERCEDES-BENZ", model:"SLS-CLASS AMG", price: 630, description: "The SLS Black Series' gem of an engine is derived from the SLS AMG GT’s naturally aspirated and aurally gifted 6.2-liter V-8. An additional 39 horsepower and a shift in the power peak by 600 revs translate to a meaty 622 horsepower at 7400 rpm.", hp: 622, mpg: 15, fuel_type: "Gasoline", doors: 2, seats: 2, vin: "WDDRJ7HA4EA011147")

SLS1 = open('https://suro-seeds.s3.amazonaws.com/SLS/SLS1.jpg')
SLS2 = open('https://suro-seeds.s3.amazonaws.com/SLS/SLS2.jpg')
SLS3 = open('https://suro-seeds.s3.amazonaws.com/SLS/SLS3.jpg')
SLS4 = open('https://suro-seeds.s3.amazonaws.com/SLS/SLS4.jpg')

SLS.photos.attach(io: SLS1, filename: 'SLS1.jpg')
SLS.photos.attach(io: SLS2, filename: 'SLS2.jpg')
SLS.photos.attach(io: SLS3, filename: 'SLS3.jpg')
SLS.photos.attach(io: SLS4, filename: 'SLS4.jpg')

CarFeature.create(car_id: 1, feature_id: 5)
CarFeature.create(car_id: 1, feature_id: 7)
CarFeature.create(car_id: 1, feature_id: 8)
CarFeature.create(car_id: 1, feature_id: 11)
CarFeature.create(car_id: 1, feature_id: 12)
CarFeature.create(car_id: 1, feature_id: 17)

F40 = Car.create(owner_id: 2, address: "1301 Alaskan Way", city: "Seattle", state: "WA", longitude: -122.3423189, latitude: 47.6059459, year: 1991, make: "FERRARI", model:"F40", price: 24113, description: "No Ferrari road car is more closely associated with Enzo Ferrari than the F40, the final project under the direction of Il Commendatore before his death in 1988. Built to commemorate the Italian carmaker's 40th anniversary, the F40 was, at its introduction in 1987, Ferrari's most powerful production car to date. Its 2936cc twin-turbocharged V8, nestled beneath the sloping buttresses of the berlinetta coupe's roofline, produced 478bhp and 426 lb-ft (577 Nm) of torque, delivering 'supercar' levels of performance: 0-60 mph in 3.8 seconds and, more significantly, a top speed of 201mph (324km/h). No production car before the F40 had ever pushed beyond that barrier.", hp: 478, mpg: 13, fuel_type: "Gasoline", doors: 2, seats: 2, vin: "ZFFMN34A6L0087030")

F401 = open('https://suro-seeds.s3.amazonaws.com/F40/F401.jpg')
F402 = open('https://suro-seeds.s3.amazonaws.com/F40/F402.jpg')
F403 = open('https://suro-seeds.s3.amazonaws.com/F40/F403.jpg')

F40.photos.attach(io: F401, filename: 'F401.jpg')
F40.photos.attach(io: F402, filename: 'F402.jpg')
F40.photos.attach(io: F403, filename: 'F403.jpg')

RWB = Car.create(owner_id: 3, address: "123 Seed Address", city: "New York", state: "NY", longitude: -73.9809975, latitude: 40.7270082, year: 1989, make: "PORSCHE", model: "911 RWB", price: 964, description: "Rauh Welt Begriff's Akira Nakai travels the world creating wild-looking custom Porsches with huge wheel arch flares. Forgestar wheels uses one of these machines as the starting point for a show car that packs the Porsche with a long list of modifications, and now it's for rent. The car is allegedly one of the lowest miles RWB-tuned vehicles in the world.", hp: 400, mpg: 17, fuel_type: "Gasoline", doors: 2, seats: 2, vin: "WP0EB0913KS173174")

RWB1 = open('https://suro-seeds.s3.amazonaws.com/RWB911/RWB1.jpg')
RWB2 = open('https://suro-seeds.s3.amazonaws.com/RWB911/RWB2.jpg')
RWB3 = open('https://suro-seeds.s3.amazonaws.com/RWB911/RWB3.jpg')
RWB4 = open('https://suro-seeds.s3.amazonaws.com/RWB911/RWB4.jpg')
RWB5 = open('https://suro-seeds.s3.amazonaws.com/RWB911/RWB5.jpg')
RWB6 = open('https://suro-seeds.s3.amazonaws.com/RWB911/RWB6.jpg')

RWB.photos.attach(io: RWB1, filename: 'RWB1.jpg')
RWB.photos.attach(io: RWB2, filename: 'RWB2.jpg')
RWB.photos.attach(io: RWB3, filename: 'RWB3.jpg')
RWB.photos.attach(io: RWB4, filename: 'RWB4.jpg')
RWB.photos.attach(io: RWB5, filename: 'RWB5.jpg')
RWB.photos.attach(io: RWB6, filename: 'RWB6.jpg')

CarFeature.create(car_id: 3, feature_id: 14)
CarFeature.create(car_id: 3, feature_id: 18)

SUPRA = Car.create(owner_id: 3, address: "123 Seed Address", city: "New York", state: "NY", longitude: -74.0056983, latitude: 40.7518851, year: 1997, make: "TOYOTA", model: "SUPRA", price: 166, description: "Highly modified supra, 953 WHP. 32PSI Boost.", hp: 953, mpg: 19, fuel_type: "Gasoline", doors: 2, seats: 4, vin: "JT2JA82J2P0002132")

SUPRA1 = open('https://suro-seeds.s3.amazonaws.com/SUPRAMK4/Supra1.jpg')
SUPRA2 = open('https://suro-seeds.s3.amazonaws.com/SUPRAMK4/Supra2.jpg')
SUPRA3 = open('https://suro-seeds.s3.amazonaws.com/SUPRAMK4/Supra3.jpg')
SUPRA4 = open('https://suro-seeds.s3.amazonaws.com/SUPRAMK4/Supra4.jpg')
SUPRA5 = open('https://suro-seeds.s3.amazonaws.com/SUPRAMK4/Supra5.jpg')

SUPRA.photos.attach(io: SUPRA1, filename: 'SUPRA1.jpg')
SUPRA.photos.attach(io: SUPRA2, filename: 'SUPRA2.jpg')
SUPRA.photos.attach(io: SUPRA3, filename: 'SUPRA3.jpg')
SUPRA.photos.attach(io: SUPRA4, filename: 'SUPRA4.jpg')
SUPRA.photos.attach(io: SUPRA5, filename: 'SUPRA5.jpg')

CarFeature.create(car_id: 4, feature_id: 8)
CarFeature.create(car_id: 4, feature_id: 14)

