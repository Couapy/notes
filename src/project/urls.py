from django.conf import settings
from django.conf.urls.static import static
#from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include('core.urls', namespace='core')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('', include("social_django.urls", namespace="social")),
]
