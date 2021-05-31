from django.db import models
from tag.models import Tag
import uuid
from config.asset_storage import ImageStorage
from .utils import upload_image


class Meme(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    image = models.ImageField(storage=ImageStorage, upload_to=upload_image)
    recommended = models.IntegerField(default=0)
    tags = models.ManyToManyField(Tag)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(
        verbose_name="created_at", auto_now_add=True, editable=False
    )
    owner = models.ForeignKey(
        "accounts.User", on_delete=models.CASCADE, related_name="owner"
    )

    class Meta:
        ordering = ["recommended"]
