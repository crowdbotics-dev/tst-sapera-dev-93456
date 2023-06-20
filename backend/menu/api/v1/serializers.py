from rest_framework import serializers
from menu.models import Main

class MainSerializer(serializers.ModelSerializer):

    class Meta:
        model = Main
        fields = "__all__"