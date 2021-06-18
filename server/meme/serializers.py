from rest_framework import serializers
from .models import Meme
from .utils import delete_image


class MemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meme
        fields = "__all__"

    def create(self, validated_data):
        owner = self.context["request"].user
        tags = validated_data["tags"]
        breakpoint()
        new_tags = tags

        """
        TODO: 없는 Tag 생성 후, new_tags 추가 후 전달
        """
        validated_data.update(owner=owner)
        validated_data.update(tags=new_tags)
        return super().create(validated_data)

    def update(self, instance, validated_data):
        image = instance.image
        delete_image(image.name)

        return super().update(instance, validated_data)
