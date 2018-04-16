module Api::V1
  class ActivityEntriesController < ApplicationController

    def index
      @activity_entries = ActivityEntry.all.order("created_at DESC")
      render json: @activity_entries
    end

    def create
      @activity_entry = ActivityEntry.create(activity_entry_params)
      render json: @activity_entry
    end

    def update
      @activity_entry = ActivityEntry.find(params[:id])
      @activity_entry.update_attributes(activity_entry_params)
      render json: @activity_entry
    end

    def destroy
      @activity_entry = ActivityEntry.find(params[:id])

      if @activity_entry.destroy
        head :no_content, status: :ok
      else
        render json: @activity_entry.errors, status: :unprocessable_entity
      end
    end

    private

      def activity_entry_params
        params.require(:activity_entry).permit(:activity_type_id)
      end

  end
end
