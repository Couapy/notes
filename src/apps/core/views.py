from django.shortcuts import render
from rest_framework import permissions, viewsets

from core.models.user import User, Profile
from core.serializers import (
    ListItemSerializer,
    ListNoteSerializer,
    NoteBookSerializer,
    NoteSerializer,
    NoteSpaceSerializer,
    ProfileSerializer,
    UserSerializer
)
from rest_framework.response import Response
from core.models.notes import ListItem, ListNote, Note
from core.models.spaces import NoteBook, NoteSpace


class CurrentUserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Give the current user.
    """
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return User.objects.filter(pk=self.request.user.pk)

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)


class CurrentProfileViewSet(viewsets.ModelViewSet):
    """
    Give the profile of the current user.
    """
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(request.user.profile)
        return Response(serializer.data)


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ListNoteViewSet(viewsets.ModelViewSet):
    queryset = ListNote.objects.all()
    serializer_class = ListNoteSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ListItemViewSet(viewsets.ModelViewSet):
    queryset = ListItem.objects.all()
    serializer_class = ListItemSerializer
    permission_classes = (permissions.IsAuthenticated,)


class CurrentNoteSpaceViewSet(viewsets.ModelViewSet):
    """
    Give the note space of the current user.
    """
    serializer_class = NoteSpaceSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return NoteSpace.objects.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(request.user.notespace)
        return Response(serializer.data)


class NoteBookViewSet(viewsets.ModelViewSet):
    queryset = NoteBook.objects.all()
    serializer_class = NoteBookSerializer
    permission_classes = (permissions.IsAuthenticated,)


def index(request):
    return render(request, 'index.html', {})
