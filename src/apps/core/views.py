from django.http import HttpResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView
from rest_framework.renderers import JSONRenderer

from core.decorators import login_required
from core.models.notes import ListItem, ListNote, Note
from core.models.spaces import NoteBook, NoteSpace
from core.models.user import Profile
from core.serializers import (ListItemSerializer, ListNoteSerializer,
                              NoteBookSerializer, NoteSerializer,
                              NoteSpaceSerializer, ProfileSerializer,
                              UserSerializer)


class UserView(TemplateView):

    @login_required
    def get(self, request):
        serializer = UserSerializer(request.user, context={'request': request})
        return HttpResponse(JSONRenderer().render(serializer.data))

    @login_required
    def put(self, request):
        return HttpResponse("TODO")

    def post(self, request):
        return HttpResponse("TODO")

    @login_required
    def delete(self, request):
        return HttpResponse("TODO")


class ProfileView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")

    def put(self, request):
        return HttpResponse("TODO")


class NoteSpaceView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")


class NoteBooksView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")

    def post(self, request):
        return HttpResponse("TODO")


class NoteBooksDetailView(TemplateView):
    def get(self, request, id_note_book):
        return HttpResponse("TODO")

    def put(self, request, id_note_book):
        return HttpResponse("TODO")

    def delete(self, request, id_note_book):
        return HttpResponse("TODO")


class ListNotesView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")

    def post(self, request):
        return HttpResponse("TODO")


class ListNotesDetailView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")

    def put(self, request):
        return HttpResponse("TODO")

    def delete(self, request):
        return HttpResponse("TODO")


class ListNotesItemsView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")

    def post(self, request):
        return HttpResponse("TODO")


class ListNotesItemsDetailView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")

    def put(self, request):
        return HttpResponse("TODO")

    def delete(self, request):
        return HttpResponse("TODO")


class NotesView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")

    def post(self, request):
        return HttpResponse("TODO")


class NotesDetailView(TemplateView):
    def get(self, request):
        return HttpResponse("TODO")

    def put(self, request):
        return HttpResponse("TODO")

    def delete(self, request):
        return HttpResponse("TODO")


def index(request):
    return render(request, 'index.html', {})
