import os
from .constants import PROJECT_DIR

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_DIR, 'var/static/')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(PROJECT_DIR, 'var/media/')
