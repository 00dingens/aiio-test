# aiio-test

Assessment Task for aiio. Further notes are at the bottom.

## Run the whole thing

    cd aiio-test/frontend
    npm install
    npm run build
    cd ../backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver

Browse to http://127.0.0.1:8000/

## Run frontend for development:

Backend can handle both, work with FE running for dev and serve FE build.

    cd aiio-test/frontend
    npm install
    npm run dev

## Run Backend

### Initial dev setup:

    cd aiio-test/backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python manage.py migrate

### Run application:

    cd aiio-test/backend
    python manage.py runserver

### Reset DB and load demo data:

    cd aiio-test/backend
    python manage.py flush --no-input
    python manage.py load_demo_data

## Further notes

Usually I would cleanup the git history, but just in case we want to talk about how I approached this thing I kept it.

I thought about moving the API calls into one service, but something went wrong (because I was still thinking too much in Angular). Should be no big thing, but I think for a tiny project like this it is fine to have the calls where they are made.

As an application grows I would split more things up when they become to crowded, but I also try not to over-engineer things and keep them rather simple.

I decided to use the django-rest-framework, because we are already using frameworks and it makes the whole thing more standardized.

The design is not really beautiful, so I think this is not the main focus of this task and did not care for exact spacings and stuff like border radius too much. In RL I would rather discuss to have a proper and consistent design.

As next steps it would feel natural to:

- Let the user input names for new list entries
- have a page to view saved selections
- have a proper design with consistent spacings and colors
- move FE's api stuff to one service
- add filter arguments to BE for parent elements
- set up a proper deployment with docker
- write tests
