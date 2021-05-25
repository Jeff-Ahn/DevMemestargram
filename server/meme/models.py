from django.db import models
from tag.models import Tag
import uuid
import datetime, os
from config.asset_storage import ImageStorage


def set_filename_format(now, filename):
    return "devmemestargram-{date}-{microsecond}{extension}".format(
        date=str(now.date()),
        microsecond=now.microsecond,
        extension=os.path.splitext(filename)[1],
    )


def directory_path(filename):
    now = datetime.datetime.now()

    path = "images/{year}/{month}/{day}/{filename}".format(
        year=now.year,
        month=now.month,
        day=now.day,
        filename=set_filename_format(now, filename),
    )

    return path


class Meme(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    image = models.ImageField(storage=ImageStorage)
    recommended = models.IntegerField(default=0)
    tags = models.ManyToManyField(Tag)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(
        verbose_name="created_at", auto_now_add=True, editable=False
    )

    class Meta:
        ordering = ["recommended"]
