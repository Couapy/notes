from django.urls import path
from django.conf.urls import url

from . import views


app_name = "core"
urlpatterns = [
    path('', views.index, name='index'),
    url(r'^', views.FrontendAppView.as_view())
]
