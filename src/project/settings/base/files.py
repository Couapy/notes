import os
from .constants import PROJECT_DIR

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_DIR, 'var/static/')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(PROJECT_DIR, 'var/media/')
REACT_APP_DIR = os.path.join(PROJECT_DIR, 'src/apps/frontend')
STATICFILES_DIRS = [os.path.join(REACT_APP_DIR, 'build', 'static')]
