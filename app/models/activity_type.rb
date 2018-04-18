class ActivityType < ApplicationRecord

  has_many :activity_entries, dependent: :destroy

end
