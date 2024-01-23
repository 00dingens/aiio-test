#from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, SubCategory, SubProduct, Selection
from .serializers import ProductSerializer, SubCategorySerializer, SubProductSerializer, SelectionSerializer

from rest_framework import viewsets


# @api_view(['GET'])
# def getProducts(request):
#   products = Product.objects.all()
#   serializer = ProductSerializer(products, many=True)
#   return Response(serializer.data)


# @api_view(['POST'])
# def addProduct(request):
#   serializer = ProductSerializer(data=request.data)
#   if serializer.is_valid():
#     serializer.save()
#   return Response(serializer.data)



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer

class SubProductViewSet(viewsets.ModelViewSet):
    queryset = SubProduct.objects.all()
    serializer_class = SubProductSerializer

class SelectionViewSet(viewsets.ModelViewSet):
    queryset = Selection.objects.all()
    serializer_class = SelectionSerializer