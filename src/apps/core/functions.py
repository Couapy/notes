import uuid
import os


def profile_directory_path(request, file):
    """Return the localstorage path for user profile image."""
    return directory_path('profile', file)


def directory_path(directory, file):
    """This function generate a random name to save files."""
    try:
        file_name, file_extension = os.path.splitext(file)
    except Exception:
        file_extension = ''
    new_file_name = str(uuid.uuid4()) + file_extension
    return '{}/{}'.format(directory, new_file_name)
