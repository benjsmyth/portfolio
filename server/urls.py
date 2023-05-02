from django.urls import path
from . import views

urlpatterns = [
    path('abouts', views.abouts),
    path('projects', views.projects),
    path('tags', views.tags)
]
