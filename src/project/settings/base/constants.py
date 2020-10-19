import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
PROJECT_DIR = os.path.dirname(BASE_DIR)
APPS_DIR = os.path.join(PROJECT_DIR, 'apps')
