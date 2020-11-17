from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from .notes import ListNote, TextNote


class NoteSpace(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE
    )


class NoteBook(models.Model):
    title = models.CharField(
        max_length=128
    )
    sections = models.ManyToManyField(
        to='self'
    )
    list_notes = models.ManyToManyField(
        to=ListNote
    )
    text_notes = models.ManyToManyField(
        to=TextNote
    )

    @property
    def notes():
        return self.list_notes + self.text_notes


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
