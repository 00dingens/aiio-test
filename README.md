# aiio-test

Assessment Task for aiio

For now I will just put my notes here.

## Quickstart

### Rund frontend for dev:

    cd aiio-test/frontend
    npm install
    npm run dev

### Backend (TODO):

Initial dev setup:

    cd aiio-test/backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

Run application:

    cd aiio-test/backend
    python manage.py runserver

## Technology

React

- (Fluid?)
- Context API
- Redux
- fetch or axios

Django

- Django-Rest?

## Roadmap

Django project structure
Django scaffold?

- CRUD: products, subcategories, subproducts, (selection)
  Migrations? -> also for example data
-

React
Scaffold?
Context API to save state (Redux needs extra package)
Fluid? What does look like the example?
Responsive?
Q: Show new subcat when not matched by search?
Q: Save new subcat immediately? (to get an id)

## TODO

Frontend:

- Service for api calls
- Add buttons functionality
- Save functionality
- Cleanup components:

  - Generic listing Component with Head Body and Footer like BS cards?
  - Separate Listing and Entries?
  - Extract state to separate component/service?
  - => Not everything in index.

Backend:

- Everything
- Setup project
- Demo data migration
- REST

## Links

Django&React with REST. Looks bit extensive, but good combo to follow along:

- Part1 https://medium.com/swlh/full-stack-with-django-and-react-django-4dcd87d57356
- Part2 https://medium.com/swlh/full-stack-with-django-and-react-react-afae36017852

Maybe trying this first, looks faster:

- https://medium.com/codex/how-to-integrate-react-and-django-framework-in-a-simple-way-c8b90f3ce945

Django-Rest

- https://radixweb.com/blog/create-rest-api-using-django-rest-framework

  Corrections:

  - file name `frontend/babel.config.json`
  - Deprecated stuff:
    - https://www.npmjs.com/package/@babel/plugin-proposal-class-properties
    - In HomePage.js: `Routes` instead of `Switch`

## Further notes

    python3 -m pip install pipenv --upgrade
    pipenv install django

Deprecated
