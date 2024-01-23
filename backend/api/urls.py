
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getProducts),
    path('addProduct', views.addProduct)
]
