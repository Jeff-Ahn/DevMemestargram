from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager
from meme.models import Meme


class User(AbstractUser):
    username = None
    email = models.EmailField(_("email address"), unique=True)
    recommed_memes = models.ManyToManyField(Meme, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
