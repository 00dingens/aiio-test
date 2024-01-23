from django.db import models

# Create your models here.

class Product(models.Model):
  productName = models.CharField(max_length=200)
  