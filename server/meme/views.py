from rest_framework import viewsets
from .models import Meme
from .serializers import MemeSerializer
from .utils import delete_image
from rest_framework.response import Response
from rest_framework import status


class MemeViewset(viewsets.ModelViewSet):
    queryset = Meme.objects.all()
    serializer_class = MemeSerializer

    http_methods = ["get", "post", "put"]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        delete_image(instance.image.name)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
