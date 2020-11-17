from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(
        max_length=128
    )
    owner = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE
    )
    date_edited = models.DateTimeField(
        auto_now=True
    )
    date_created = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        abstract = True


class ListNote(Note):
    items = models.ManyToManyField(
        to='ListItem'
    )


class ListItem(models.Model):
    index = models.IntegerField(
        default=0
    )
    body = models.TextField()
    checked = models.BooleanField(
        default=False
    )


class TextNote(Note):
    body = models.TextField()
