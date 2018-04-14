module Api::V1
  class ActivityEntriesController < ApplicationController

    def index
      @activity_entries = ActivityEntry.all
      render json: @activity_entries
    end

  end
end
