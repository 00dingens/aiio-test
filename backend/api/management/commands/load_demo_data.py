import json
from django.core.management.base import BaseCommand
from api.models import Product, SubCategory, SubProduct
import os

class Command(BaseCommand):
  help = 'Load initial data from JSON files'

  def handle(self, *args, **kwargs):

    # print output to the console
    self.stdout.write(os.getcwd())

    # Load products
    with open('./api/management/demo_data/products.json') as f:
      products_data = json.load(f)
      Product.objects.bulk_create([Product(**data) for data in products_data["products"]])
    products = {p.productId:p for p in Product.objects.all()}

    # Load subcategories
    with open('./api/management/demo_data/subcategories.json') as f:
      subcategories_data = json.load(f)
      def sc(data):
        data["productId"] = products[data["productId"]]
        return SubCategory(**data)
      SubCategory.objects.bulk_create([sc(data) for data in subcategories_data["subcatergories"]])
    subcategories = {s.subCategoryId:s for s in SubCategory.objects.all()}

    # Load subproducts
    with open('./api/management/demo_data/subproducts.json') as f:
      subproducts_data = json.load(f)
      def sp(data):
        data["subCategoryId"] = subcategories[data["subCategoryId"]]
        return SubProduct(**data)
      SubProduct.objects.bulk_create([sp(data) for data in subproducts_data["subproducts"]])

    self.stdout.write(self.style.SUCCESS('Successfully loaded initial data'))
