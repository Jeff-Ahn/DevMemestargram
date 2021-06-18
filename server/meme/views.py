from rest_framework import viewsets, status
from .models import Meme
from .serializers import MemeSerializer
from .utils import delete_image
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class MemeViewset(viewsets.ModelViewSet):
    queryset = Meme.objects.all()
    serializer_class = MemeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    http_methods = ["get", "post", "put", "delete"]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        delete_image(instance.image.name)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
