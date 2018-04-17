=======
# PA

An example Rails 5.2 (API) &amp; React Physical Activity tracker app

This is an exercise in using the latest Rails API features as a standalone backend with a separate React frontend.

## Running locally:

#### Database:

PA is using Postgres. Make sure you have a postgres server running, and have entered in proper credentials/DB names to your `config/database.yml` file.

Once you have created the databases and migrated them, you can run the seeds file to load some test data:

`rails db:create:all && rails db:migrate && rails db:setup && rails db:seed`

#### Foreman / Procfile

PA has two components, a Rails API backend and a React frontend. The frontend is found in `RAILS_ROOT/client`.

If you have the foreman gem installed, or with `bundle exec` run:

`foreman start -f Procfile.dev`

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
