from rest_framework import serializers
from .models import Meme
from django.db import transaction


class MemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meme
        fields = (
            "id",
            "image_access_path",
            "recommended",
            "tags",
            "description",
            "created_date",
            "image",
        )
