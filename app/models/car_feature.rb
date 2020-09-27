# == Schema Information
#
# Table name: car_features
#
#  id         :bigint           not null, primary key
#  car_id     :integer          not null
#  feature_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CarFeature < ApplicationRecord 
    validates :car_id, :feature_id, presence: true

    belongs_to :car
    belongs_to :feature
end
