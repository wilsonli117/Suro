# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  car_id     :integer          not null
#  status     :boolean          default(FALSE), not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Booking < ApplicationRecord
    validates :user_id, :car_id, :status, :start_date, :end_date, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :car,
        foreign_key: :car_id,
        class_name: :Car

    has_one :host,
        through: :car,
        source: :owner

end
