class ActivityEntry < ApplicationRecord

  belongs_to :activity_type

  validates :activity_type, presence: true

end
