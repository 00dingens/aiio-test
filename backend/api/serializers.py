from rest_framework import serializers
from .models import Product, SubCategory, SubProduct, Selection

# class ProductSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Product
#     fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'

class SubCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = SubCategory
    fields = '__all__'

class SubProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubProduct
        fields = '__all__'

class SelectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Selection
        fields = '__all__'