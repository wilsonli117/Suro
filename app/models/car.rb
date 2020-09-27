# == Schema Information
#
# Table name: cars
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  address     :string           not null
#  city        :string           not null
#  state       :string           not null
#  longitude   :float            not null
#  latitude    :float            not null
#  year        :integer          not null
#  make        :string           not null
#  model       :string           not null
#  price       :string           not null
#  description :text             not null
#  hp          :integer          not null
#  mpg         :integer          not null
#  fuel_type   :string           not null
#  doors       :integer          not null
#  seats       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  vin         :string           not null
#
class Car < ApplicationRecord 
    validates :owner_id, :address, :city, :state, :longitude, :latitude, :year, :make, :model, :price, :description, :hp, :fuel_type, :doors, :seats, presence: true

    belongs_to :owner, 
        foreign_key:  :owner_id,
        class_name: "User"

    has_many :car_features,
        foreign_key: :car_id,
        class_name: "CarFeature"

    has_many :features, 
        through: :car_features



end
