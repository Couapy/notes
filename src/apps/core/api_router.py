from rest_framework import routers, routers
from core.views import (
    CurrentProfileViewSet,
    CurrentUserViewSet,
    ListItemSerializerViewSet,
    ListNoteSerializerViewSet,
    NoteBookSerializerViewSet,
    NoteSerializerViewSet,
    NoteSpaceSerializerViewSet
)

# Initialize the API router
router = routers.DefaultRouter()

# Defines routes
router.register(r"user", CurrentUserViewSet, basename="user")
router.register(r"profile", CurrentProfileViewSet, basename="profile")
router.register(r"notes", NoteSerializerViewSet, basename="notes")
router.register(r"listnote", ListNoteSerializerViewSet, basename="listnote")
router.register(r"listitem", ListItemSerializerViewSet, basename="listitem")
router.register(r"notespace", NoteSpaceSerializerViewSet, basename="notespace")
router.register(r"notebook", NoteBookSerializerViewSet, basename="notebook")
