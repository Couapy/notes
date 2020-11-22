from rest_framework import routers, routers
from core.views import (
    CurrentProfileViewSet,
    CurrentUserViewSet,
    CurrentNoteSpaceViewSet,
    ListItemViewSet,
    ListNoteViewSet,
    NoteBookViewSet,
    NoteViewSet,
)

# Initialize the API router
router = routers.DefaultRouter()

# Defines routes
router.register(r"user", CurrentUserViewSet, basename="user")
router.register(r"profile", CurrentProfileViewSet, basename="profile")
router.register(r"notespace", CurrentNoteSpaceViewSet, basename="notespace")
router.register(r"notes", NoteViewSet, basename="notes")
router.register(r"listnote", ListNoteViewSet, basename="listnote")
router.register(r"listitem", ListItemViewSet, basename="listitem")
router.register(r"notebook", NoteBookViewSet, basename="notebook")
