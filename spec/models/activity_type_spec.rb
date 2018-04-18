require 'rails_helper'

RSpec.describe ActivityType, type: :model do
  let(:subject) { ActivityType.new(FactoryBot.attributes_for(:activity_type)) }

  describe '#single_line and helpers' do
    it 'should save with a name' do
      expect(subject.save).to eq true
      expect(ActivityType.count).to eq 1
    end
  end
end
