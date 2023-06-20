
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MainViewSet
router = DefaultRouter()
router.register('main', MainViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
