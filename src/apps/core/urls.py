from django.urls import path
from core.views import (ListNotesDetailView, ListNotesItemsDetailView,
                        ListNotesItemsView, ListNotesView, NoteBooksDetailView,
                        NoteBooksView, NotesDetailView, NoteSpaceView,
                        NotesView, ProfileView, UserView, index)

app_name = "core"
urlpatterns = [
    path('', index, name='index'),
    path(
        'api/user/',
        UserView.as_view(),
        name='user-detail'
    ),
    path(
        'api/user/profile/',
        ProfileView.as_view(),
        name='profile'
    ),
    path(
        'api/user/notespace/',
        NoteSpaceView.as_view(),
        name='notespace'
    ),
    path(
        'api/user/notesbooks/',
        NoteBooksView.as_view(),
        name='notebooks'
    ),
    path(
        'api/user/notesbooks/<int:id>/',
        NoteBooksDetailView.as_view(),
        name='notebooksdetails'
    ),
    path(
        'api/user/listnotes/',
        ListNotesView.as_view(),
        name='listnotes'
    ),
    path(
        'api/user/listnotes/<int:id>/',
        ListNotesDetailView.as_view(),
        name='listnotesdetail'
    ),
    path(
        'api/user/listnotes/<int:id>/items/',
        ListNotesItemsView.as_view(),
        name='listnotesitems'
    ),
    path(
        'api/user/listnotes/<int:id>/items/<int:iditem>/',
        ListNotesItemsDetailView.as_view(),
        name='listnotesitemsdetail'
    ),
    path(
        'api/user/notes/',
        NotesView.as_view(),
        name='notes'
    ),
    path(
        'api/user/notes/<int:id>/',
        NotesDetailView.as_view(),
        name='notesdetail'
    ),
]
