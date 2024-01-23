from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer

@api_view(['GET'])
def getProducts(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)


@api_view(['POST'])
def addProduct(request):
  serializer = ProductSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)