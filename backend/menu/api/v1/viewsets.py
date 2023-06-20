from rest_framework import authentication
from menu.models import Main
from .serializers import MainSerializer
from rest_framework import viewsets

class MainViewSet(viewsets.ModelViewSet):
    serializer_class = MainSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Main.objects.all()