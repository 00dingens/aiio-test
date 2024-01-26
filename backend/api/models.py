from django.db import models

# Create your models here.

# class Product(models.Model):
#   productName = models.CharField(max_length=200)



class Product(models.Model):
  productId = models.AutoField(primary_key=True)
  productName = models.CharField(max_length=255)

class SubCategory(models.Model):
  productId = models.ForeignKey(Product, on_delete=models.CASCADE)
  subCategoryId = models.AutoField(primary_key=True)
  subCategoryName = models.CharField(max_length=255)

class SubProduct(models.Model):
    subCategoryId = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    subProductId = models.AutoField(primary_key=True)
    subProductName = models.CharField(max_length=255)

class Selection(models.Model):
    selectionId = models.AutoField(primary_key=True)
    products = models.ManyToManyField(Product, blank=True)
    subProducts = models.ManyToManyField(SubProduct, blank=True)
    subCategories = models.ManyToManyField(SubCategory, blank=True)
