class CreateActivityEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :activity_entries do |t|
      t.references :activity_type, foreign_key: true

      t.timestamps
    end
  end
end
