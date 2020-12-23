from django.contrib.auth.models import User
from django.db import models


class NoteSpace(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
    )
    notes = models.ManyToManyField(
        to="Note",
    )
    notebooks = models.ManyToManyField(
        to="NoteBook",
    )
    archive_notes = models.ManyToManyField(
        to="Note",
        related_name="archive"
    )
    archive_notebook = models.ManyToManyField(
        to="NoteBook",
        related_name="archive"
    )
    trash_notes = models.ManyToManyField(
        to="Note",
        related_name="trash"
    )
    trash_notebook = models.ManyToManyField(
        to="NoteBook",
        related_name="trash"
    )


class NoteBook(models.Model):
    title = models.CharField(
        max_length=128,
    )
    sections = models.ManyToManyField(
        to='self',
    )
    notes = models.ManyToManyField(
        to="Note",
    )
