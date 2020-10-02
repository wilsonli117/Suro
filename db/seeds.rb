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

SLS1 = open('https://suro-seeds.s3.amazonaws.com/SLS/SLS2.jpg')
SLS2 = open('https://suro-seeds.s3.amazonaws.com/SLS/SLS3.jpg')
SLS3 = open('https://suro-seeds.s3.amazonaws.com/SLS/SLS4.jpg')

SLS.photos.attach(io: SLS1, filename: 'SLS1.jpg')
SLS.photos.attach(io: SLS2, filename: 'SLS2.jpg')
SLS.photos.attach(io: SLS3, filename: 'SLS3.jpg')

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

RWB = Car.create(owner_id: 3, address: "123 Seed Address", city: "Seattle", state: "WA", longitude: -122.3436635, latitude: 47.6113399, year: 1989, make: "PORSCHE", model: "911 RWB", price: 964, description: "Rauh Welt Begriff's Akira Nakai travels the world creating wild-looking custom Porsches with huge wheel arch flares. Forgestar wheels uses one of these machines as the starting point for a show car that packs the Porsche with a long list of modifications, and now it's for rent. The car is allegedly one of the lowest miles RWB-tuned vehicles in the world.", hp: 400, mpg: 17, fuel_type: "Gasoline", doors: 2, seats: 2, vin: "WP0EB0913KS173174")

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

SUPRA = Car.create(owner_id: 3, address: "123 Seed Address", city: "New York", state: "NY", longitude: -74.0056983, latitude: 40.7518851, year: 1997, make: "TOYOTA", model: "SUPRA MK4", price: 166, description: "Highly modified supra, 953 WHP. 32PSI Boost.", hp: 953, mpg: 19, fuel_type: "Gasoline", doors: 2, seats: 4, vin: "JT2JA82J2P0002132")

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

EVO9 = Car.create(owner_id: 3, address: "123 Seed Address", city: "Seattle", state: "WA", longitude: -122.3328775, latitude: 47.6130315, year: 2006, make: "MITSUBISHI", model: "LANCER EVOLUTION IX", price: 240, description: "Even in Version 9.0, the Evo formula remains a familiar one: a lightweight Lancer sedan donor car, with a turbocharged 2.0-liter engine and idiot-resistant all-wheel drive. But power has been increased beyond the old 276-horse limit (according to the so-called gentleman's agreement among Japanese automakers) to a new official 286 horsepower at 6500 rpm, while torque has been cranked up to 289 pound-feet at 3500 rpm. The added torque comes from Mitsubishi's MIVEC variable valve-timing (an Evo first), and the horsepower increase is due to the turbocharger's larger and more direct compressor housing outlet.", hp: 286, mpg: 22, fuel_type: "Gasoline", doors: 4, seats: 4, vin: "JA3AH86C96U037870")

EVO91 = open('https://suro-seeds.s3.amazonaws.com/EVO9/EVO91.jpg')
EVO92 = open('https://suro-seeds.s3.amazonaws.com/EVO9/EVO92.jpg')

EVO9.photos.attach(io: EVO91, filename: 'EVO91.jpg')
EVO9.photos.attach(io: EVO92, filename: 'EVO92.jpg')

CarFeature.create(car_id: 5, feature_id: 1)
CarFeature.create(car_id: 5, feature_id: 4)
CarFeature.create(car_id: 5, feature_id: 8)
CarFeature.create(car_id: 5, feature_id: 12)
CarFeature.create(car_id: 5, feature_id: 14)
CarFeature.create(car_id: 5, feature_id: 17)

E63 = Car.create(owner_id: 1, address: "123 Seed Address", city: "New York", state: "NY", longitude: -73.9934462, latitude: 40.7521976, year: 2019, make: "MERCEDES-BENZ", model: "E63S WAGON", price: 300, description: "The E63 S wagon cages a sinister-sounding 603-hp twin-turbo V-8 mated to a nine-speed automatic transmission and standard 4Matic+ all-wheel drive. Despite the E63 S wagon's exhaust-popping and tire-squealing demeanor, its sumptuous interior preserves serene noise levels and the company's luxury predisposition. Likewise, the list of standard cabin features includes customizable ambient interior lighting, heated and ventilated front seats, massaging front seats, and more. Every model has driver-assistance technology such as automated emergency braking, blind-spot monitoring, and self-parking assist; a slew of high-tech options include semi-autonomous driving aids. With a spacious back seat and up to 64 cubic feet of cargo space (35 cubes with all seats up), the 2019 Mercedes-AMG E63 S wagon is as amazingly quick as it is amazingly useful.", hp: 603, mpg: 19, fuel_type: "Gasoline", doors: 4, seats: 4, vin: "WDDZF8KB5KA500158")
 
E631 = open('https://suro-seeds.s3.amazonaws.com/E63/E631.jpg')
E632 = open('https://suro-seeds.s3.amazonaws.com/E63/E632.jpg')
E633 = open('https://suro-seeds.s3.amazonaws.com/E63/E633.jpg')

E63.photos.attach(io: E631, filename: 'E631.jpg')
E63.photos.attach(io: E632, filename: 'E632.jpg')
E63.photos.attach(io: E633, filename: 'E633.jpg')

CarFeature.create(car_id: 6, feature_id: 3)
CarFeature.create(car_id: 6, feature_id: 4)
CarFeature.create(car_id: 6, feature_id: 5)
CarFeature.create(car_id: 6, feature_id: 7)
CarFeature.create(car_id: 6, feature_id: 8)
CarFeature.create(car_id: 6, feature_id: 11)
CarFeature.create(car_id: 6, feature_id: 12)
CarFeature.create(car_id: 6, feature_id: 13)
CarFeature.create(car_id: 6, feature_id: 17)

MURCI = Car.create(owner_id: 3, address: "123 Seed Address", city: "New York", state: "NY", longitude: -73.9515896, latitude: 40.7436475, year: 2010, make: "LAMBORGHINI", model: "MURCIELAGO LP640 SV", price: 487, description: "The Lamborghini Murcielago LP640, named for a legendary fighting bull, is an Italian high-performance exotic supercar. Its characteristic scissor doors open upwards in signature Lamborghini style. Electronically-controlled air scoops, located behind the doors, open depending on engine temperature and need for cooling air. The LP670-4 SuperVeloce's horsepower is bumped up to 661, and the E-gear auto-shifting manual is standard, with the six-speed manual as an option.", hp: 661, mpg: 11, fuel_type: "Gasoline", doors: 2, seats: 2, vin: "ZHWBE81H0ALA04024")

MURCI1 = open('https://suro-seeds.s3.amazonaws.com/LP670/LP6701.jpg')
MURCI2 = open('https://suro-seeds.s3.amazonaws.com/LP670/LP6702.jpg')
MURCI3 = open('https://suro-seeds.s3.amazonaws.com/LP670/LP6703.jpg')
MURCI4 = open('https://suro-seeds.s3.amazonaws.com/LP670/LP6704.jpg')

MURCI.photos.attach(io: MURCI1, filename: 'MURCI1.jpg')
MURCI.photos.attach(io: MURCI2, filename: 'MURCI2.jpg')
MURCI.photos.attach(io: MURCI3, filename: 'MURCI3.jpg')
MURCI.photos.attach(io: MURCI4, filename: 'MURCI4.jpg')

CarFeature.create(car_id: 7, feature_id: 1)
CarFeature.create(car_id: 7, feature_id: 12)

M3 = Car.create(owner_id: 7, address: "123 Seed Address", city: "New York", state: "NY", longitude: -74.0139501, latitude: 40.7176687, year: 2011, make: "BMW", model: "M3", price: 335, description: "Powered by what was at the time the most technically advanced V8 engine in the world, this generation of M3 basically kept what we all liked about the E46, and simply cranked up the amperage. With high revs, lots of noise, a perfectly balanced chassis, and well-executed proportions, it had all the ingredients to get any enthusiast’s pulse rushing.", hp: 414, mpg: 17, fuel_type: "Gasoline", doors: 2, seats: 4, vin: "WBSKG91090E568170")

M31 = open('https://suro-seeds.s3.amazonaws.com/M3/M31.jpg')
M32 = open('https://suro-seeds.s3.amazonaws.com/M3/M32.jpg')

M3.photos.attach(io: M31, filename: 'M31.jpg')
M3.photos.attach(io: M32, filename: 'M32.jpg')

CarFeature.create(car_id: 8, feature_id: 8)
CarFeature.create(car_id: 8, feature_id: 11)
CarFeature.create(car_id: 8, feature_id: 12)
CarFeature.create(car_id: 8, feature_id: 13)

TH = Car.create(owner_id: 5, address: "123 Seed Address", city: "Los Angeles", state: "CA", longitude: -118.3045784, latitude: 34.01382, year: 2020, make: "JEEP", model: "GRAND CHEROKEE TRACKHAWK", price: 151, description: "Very fast, very big car", hp: 707, mpg: 14, fuel_type: "Gasoline", doors: 4, seats: 4, vin: "1C4RJFN93JC410435")

TH1 = open('https://suro-seeds.s3.amazonaws.com/TRACKHAWK/TRACKHAWK.jpg')

TH.photos.attach(io: TH1, filename: 'TH1.jpg')

CarFeature.create(car_id: 9, feature_id: 3)
CarFeature.create(car_id: 9, feature_id: 4)
CarFeature.create(car_id: 9, feature_id: 5)
CarFeature.create(car_id: 9, feature_id: 7)
CarFeature.create(car_id: 9, feature_id: 8)
CarFeature.create(car_id: 9, feature_id: 11)
CarFeature.create(car_id: 9, feature_id: 12)
CarFeature.create(car_id: 9, feature_id: 13)
CarFeature.create(car_id: 9, feature_id: 17)

SEED1 = Car.create(owner_id: 4, address: "123 Seed Address", city: "Los Angeles", state: "CA", longitude: -118.3746384, latitude: 34.076294, year: 1968, make: "CHEVROLET", model: "CORVETTE", price: 1982, description: "Classic", hp: 300, mpg: 9, fuel_type: "Gasoline", doors: 2, seats: 2, vin: "1C4RJFN93JC410435")

SEED1P = open('https://suro-seeds.s3.amazonaws.com/C3/C31.jpg')

SEED1.photos.attach(io: SEED1P, filename: 'SEED1P.jpg')

CarFeature.create(car_id: 10, feature_id: 14)
CarFeature.create(car_id: 10, feature_id: 18)

SEED2 = Car.create(owner_id: 4, address: "123 Seed Address", city: "New York", state: "NY", longitude: -73.956105, latitude: 40.7844711, year: 2020, make: "PORSCHE", model: "911 TURBO S", price: 992, description: "Porsche claims that the revised engine spins up 641 horsepower and 590 lb-ft of torque, increases of 61 hp and 37 lb-ft. These power numbers will help launch the Turbo S from zero to 60 mph in a claimed 2.5 seconds.", hp: 641, mpg: 20, fuel_type: "Gasoline", doors: 2, seats: 4, vin: "1C4RJFN93JC410435")

SEED2P = open('https://suro-seeds.s3.amazonaws.com/911TURBOS/9111.jpg')
SEED2P2 = open('https://suro-seeds.s3.amazonaws.com/911TURBOS/9112.jpg')

SEED2.photos.attach(io: SEED2P, filename: 'SEED2P.jpg')
SEED2.photos.attach(io: SEED2P2, filename: 'SEED2P2.jpg')

CarFeature.create(car_id: 11, feature_id: 1)
CarFeature.create(car_id: 11, feature_id: 10)
CarFeature.create(car_id: 11, feature_id: 12)
CarFeature.create(car_id: 11, feature_id: 13)

SEED3 = Car.create(owner_id: 5, address: "123 Seed Address", city: "New York", state: "NY", longitude: -73.9745957, latitude: 40.7853344, year: 2020, make: "BRABUS", model: "850", price: 850, description: "WHY ARE YOU READING THIS? THIS IS SEED DATA", hp: 850, mpg: 2, fuel_type: "Gasoline", doors: 4, seats: 4, vin: "1C4RJFN93JC410435")

SEED3P = open('https://suro-seeds.s3.amazonaws.com/BRABUS850/BRABUS1.jpg')

SEED3.photos.attach(io: SEED3P, filename: 'SEED3P.jpg')


CarFeature.create(car_id: 12, feature_id: 1)
CarFeature.create(car_id: 12, feature_id: 10)
CarFeature.create(car_id: 12, feature_id: 12)
CarFeature.create(car_id: 12, feature_id: 13)

SEED4 = Car.create(owner_id: 3, address: "123 Seed Address", city: "New York", state: "NY", longitude: -73.9744049, latitude: 40.7611288, year: 1965, make: "FORD", model: "MUSTANG", price: 500, description: "WHY ARE YOU READING THIS? THIS IS SEED DATA", hp: 385, mpg: 12, fuel_type: "Gasoline", doors: 2, seats: 2, vin: "1C4RJFN93JC410435")

SEED4P = open('https://suro-seeds.s3.amazonaws.com/GT500/GT5001.jpg')

SEED4.photos.attach(io: SEED4P, filename: 'SEED4P.jpg')

SEED5 = Car.create(owner_id: 6, address: "123 Seed Address", city: "New York", state: "NY", longitude: -74.0134891, latitude: 40.7093549, year: 1965, make: "TESLA", model: "MODEL X", price: 220, description: "The 2020 Tesla Model X might be the greenest—and one of the fastest—way to tote up to seven people over hill and dale. As the crossover cousin to the brand's iconic Model S sedan, the X is actually practical, with all-wheel drive, a high-tech cabin with room for up to seven, and striking but fussy Falcon Wing doors. Two models are offered, both with over 300 miles of driving range, and each one is impressively quick thanks to two onboard electric motors", hp: 100, mpg: 99, fuel_type: "Electric", doors: 4, seats: 4, vin: "1C4RJFN93JC410435")

SEED5P = open('https://suro-seeds.s3.amazonaws.com/2019-tesla-model-x_100697833_h.jpg')

SEED5.photos.attach(io: SEED5P, filename: 'SEED5P.jpg')
