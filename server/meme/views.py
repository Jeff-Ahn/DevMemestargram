from rest_framework import viewsets
from .models import Meme
from .serializers import MemeSerializer


class MemeViewset(viewsets.ModelViewSet):
    queryset = Meme.objects.all()
    serializer_class = MemeSerializer
