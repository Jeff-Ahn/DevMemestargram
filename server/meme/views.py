from rest_framework import viewsets, status
from .models import Meme
from .serializers import MemeSerializer
from .utils import delete_image
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from tag.models import Tag


class MemeViewset(viewsets.ModelViewSet):
    queryset = Meme.objects.all()
    serializer_class = MemeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    http_methods = ["get", "post", "put", "delete"]

    def create(self, request):
        try:
            user = request.user
            data = request.data
            description = data["description"]
            image = data["image"]
            recommended = data["recommended"]
            tags = data["tags"].split(",")
            new_meme = Meme.objects.create(
                owner=user,
                description=description,
                image=image,
                recommended=recommended,
            )
            for tag in tags:
                new_meme.tags.add(Tag.objects.get(pk=tag))

            new_meme.save()
            return Response(status=status.HTTP_201_CREATED)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        delete_image(instance.image.name)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
