from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class NoteSpace(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE
    )
    notes = models.ManyToManyField(
        to="Note",
    )



class NoteBook(models.Model):
    title = models.CharField(
        max_length=128
    )
    sections = models.ManyToManyField(
        to='self'
    )
    notes = models.ManyToManyField(
        to="Note"
    )

