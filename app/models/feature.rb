# == Schema Information
#
# Table name: features
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Feature < ApplicationRecord 
    
    validates :name, presence: true, uniqueness: true

    has_many :car_features,
        foreign_key: :feature_id,
        class_name: "CarFeature"

    has_many :cars, 
        through: :car_features

end
