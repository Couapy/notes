from django.contrib.auth.models import User
from rest_framework import serializers

from core.models.user import Profile
from core.models.notes import ListItem, ListNote, Note, TextNote
from core.models.spaces import NoteBook, NoteSpace


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            "url",
            "username",
            "first_name",
            "last_name",
            "email",
            "profile",
            "is_superuser",
            "is_staff",
            "date_joined",
        ]


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "url",
            "user",
            "bio",
            "image",
        ]


class NoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = [
            "url",
            "title",
            "owner",
            "date_edited",
            "date_created",
        ]


class ListNoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ListNote
        fields = [
            "url",
            "items"
        ]


class ListItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ListItem
        fields = [
            "url",
            "index",
            "body",
            "checked",
        ]


class TextNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextNote
        fields = [
            "urls",
            "body",
        ]


class NoteSpaceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NoteSpace
        fields = [
            "url",
            "user",
            "notes",
        ]


class NoteBookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NoteBook
        fields = [
            "url",
            "title",
            "sections",
            "notes",
        ]
