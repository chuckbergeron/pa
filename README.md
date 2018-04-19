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

#### Tests

Once you've configured the database properly, you can run the rspec unit testing suite simply with:

`rspec`

In the React `client` directory, you can run the tests with:

`jest`


<!--

* Services (job queues, cache servers, search engines, etc.)
* Deployment instructions


Clean up config stuff (integration testing, other files import / require mess at top)
General table layout (better activity entries)
Authentication
Emails
Jobs
File Upload/IMG
Config settings for iziToast



Rspec / JS unit/integration Tests
Faker ? seeds...
READMEs both for Rails app and Client app
SPA / Router
DB validations (fk constraints)
app/src
  - images
  - stylesheets
  - javascripts
Semicolon consistency
Model Validations


use @ for pathing
Type system/TypeScript
Deploy? (build JS part)
Loadable
 -->
