
#from django.contrib import admin
from django.urls import path, include
#from . import views
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, SubCategoryViewSet, SubProductViewSet, SelectionViewSet

# urlpatterns = [
#     path('', views.getProducts),
#     path('addProduct', views.addProduct)
# ]

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'subcategories', SubCategoryViewSet)
router.register(r'subproducts', SubProductViewSet)
router.register(r'selections', SelectionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]