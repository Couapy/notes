from django.contrib.auth.models import User
from django.db import models


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
