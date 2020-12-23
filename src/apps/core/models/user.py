from core.functions import profile_directory_path
from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
    )
    bio = models.TextField(
        max_length=500,
        blank=True
    )
    image = models.ImageField(
        upload_to=profile_directory_path,
        blank=True,
    )
