import os
from django.conf import settings


def profile_directory_path(request, file):
    """Return the localstorage path for user profile image."""
    try:
        file_name, file_extension = os.path.splitext(file)
    except Exception:
        file_extension = ''
    new_file_name = "current" + file_extension

    return os.path.join(
        settings.MEDIA_ROOT,
        "profile",
        request.user.pk,
        new_file_name
    )
