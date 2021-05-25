# Generated by Django 3.2.3 on 2021-05-24 17:39

from django.db import migrations, models
import meme.models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("tag", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Meme",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("image_access_path", models.CharField(max_length=255)),
                ("recommended", models.IntegerField(default=0)),
                ("description", models.CharField(max_length=255)),
                (
                    "created_at",
                    models.DateTimeField(auto_now_add=True, verbose_name="created_at"),
                ),
                ("image", models.ImageField(upload_to=meme.models.directory_path)),
                ("tags", models.ManyToManyField(to="tag.Tag")),
            ],
            options={
                "ordering": ["recommended"],
            },
        ),
    ]
