from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from PIL import Image

from core.functions import profile_directory_path
from core.models.spaces import NoteSpace


class User(AbstractUser):
    pass


class Profile(models.Model):
    user = models.OneToOneField(
        to="User",
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

    def get_image(self):
        """Return the image url"""
        if bool(self.image):
            return self.image.url
        else:
            return '/media/faceless.svg'

    def save(self, *args, **kwargs):
        """Control the save."""
        this = None
        try:
            this = Profile.objects.get(id=self.id)
        except Exception:
            pass

        if this:
            # Delete old profile image
            try:
                if this.image != self.image:
                    this.image.delete(save=False)
            except Exception:
                pass

            # Save the model
            super().save(*args, **kwargs)

            # Resize the picture
            if this.image != self.image:
                image = Image.open(self.image)
                (width, height) = image.size
                if width > 256 or height > 256:
                    size = (256, 256)
                    image = image.resize(size, Image.ANTIALIAS)
                    image.save(self.image.path)
        else:
            super().save(*args, **kwargs)

    def __str__(self):
        return self.user.__str__()


@receiver(post_save, sender=User)
def create_user_profile_and_notespace(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        NoteSpace.objects.create(user=instance)
