# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hiit = ActivityType.create(name: "HIIT")
running = ActivityType.create(name: "Running")
yoga = ActivityType.create(name: "Yoga")
swimming = ActivityType.create(name: "Swimming")

ActivityEntry.create(
  [
    {
      activity_type: hiit
    },
    {
      activity_type: yoga
    },
    {
      activity_type: swimming,
      created_at: 2.days.ago
    }
  ]
)
