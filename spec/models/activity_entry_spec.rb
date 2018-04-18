require 'rails_helper'

RSpec.describe ActivityEntry, type: :model do
  let(:subject) { ActivityEntry.new(FactoryBot.attributes_for(:activity_entry)) }

  describe '#crud' do
    it 'should not save without a type' do
      expect(subject.save).to eq false
      expect(ActivityEntry.count).to eq 0
    end

    it 'should save with an activity_type' do
      subject.activity_type = ActivityType.create!(FactoryBot.attributes_for(:activity_type))

      expect(subject.save).to eq true
      expect(ActivityEntry.count).to eq 1
    end
  end
end
