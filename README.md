# aiio-test

Assessment Task for aiio

For now I will just put my notes here.

## Quickstart

    cd aiio-test
    #first time: create venv
    python3 -m venv venv
    source venv/bin/activate

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
