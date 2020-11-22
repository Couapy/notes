from django.db import models


class Note(models.Model):
    title = models.CharField(
        max_length=128
    )
    date_edited = models.DateTimeField(
        auto_now=True
    )
    date_created = models.DateTimeField(
        auto_now_add=True
    )


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
