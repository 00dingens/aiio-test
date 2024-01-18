from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ProductSerializer

from .models import Product
# Create your views here.

class ProductListView(generics.ListAPIView):
    model = Product
    serializer_class = ProductSerializer
