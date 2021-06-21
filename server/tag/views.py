from rest_framework import viewsets, status
from .models import Tag
from .serializers import TagSerializer
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response


class TagViewset(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    http_methods = ["get", "post", "delete"]

    @action(detail=True)
    def get_tag(self, request, pk=None):
        try:
            queryset = Tag.objects.get(tag_name=pk)
            serializer = TagSerializer(queryset)
            return Response(serializer.data)
        except Tag.DoesNotExist:
            queryset = Tag.objects.create(tag_name=pk)
            serializer = TagSerializer(queryset)
            return Response(serializer.data)
