from rest_framework import serializers
from .models import Meme
from .utils import delete_image


class MemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meme
        fields = "__all__"

    def update(self, instance, validated_data):
        image = instance.image
        delete_image(image.name)

        return super().update(instance, validated_data)
