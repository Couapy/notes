from core.models.notes import ListItem, ListNote, Note
from core.models.spaces import NoteBook, NoteSpace
from core.models.user import User, Profile
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=User)
def create_user_profile_and_notespace(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        NoteSpace.objects.create(user=instance)
