# 57Blocks Challenge

Movie list App with Login, List page view with server side incremental pagination, search bar selector, favorite selections and details view.

## How to run
Make sure you have this installed:
- ruby 3.2.2
- rails 7.1.3
- bundler 2.5.6
- node 20.10.0
- npm 10.3.0

The app is divided in 2, backend Rest API and frontend APP, you need to run both in your local environment.

### Backend Rest API
Was built using `ruby on rails` api only and tested using  `rspec`

- Go to `list_api`.
- Create a random alphanumeric key of 32 random characters named `master.key` in the `app/config` folder.
- Install dependencies `bundle install`.
- Prepare the DB `bundle exec rake db:create db:migrate db:seed`.
- Run the app `rails s`.
  - To run the tests use `rspec`.
- Will be available in the url `http://localhost:3000`.

### Backend Rest API
Was built using `react`, `typescript`, `scss` with an atomic design architecture using `vite` and tested with `jest`.

- Go to `list_app`.
- Install dependencies `npm install`.
- Run the app `npm run dev`.
  - To run the tests use `npm run test`.
- Will be available in the url `http://localhost:5173/`.

## Note
The test user that you can use is:
```
 email:
user@test.com

 password:
12345
```


