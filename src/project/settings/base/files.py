import os
from .constants import PROJECT_DIR, APPS_DIR

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_DIR, 'var/static/')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(PROJECT_DIR, 'var/media/')
# STATICFILES_DIRS = [ os.path.join(APPS_DIR, 'frontend', 'build', 'static') ]
STATICFILES_DIRS = [
    APPS_DIR + '/frontend/build/',
    APPS_DIR + '/frontend/build/static/',
]
CORS_ORIGIN_ALLOW_ALL = True
