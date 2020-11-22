from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path

from core import urls_api

urlpatterns = [
    path('', include('core.urls', namespace='core')),
    path('api/', include(urls_api.router.urls)),
    path('api-auth/', include(
        'rest_framework.urls',
        namespace='rest_framework'
    )),
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
] + static(
    settings.STATIC_URL,
    document_root=settings.STATIC_ROOT
) + static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)
