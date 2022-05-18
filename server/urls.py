from django.urls import path
from . import views

urlpatterns = [
    path('briefs/', views.briefs),
    path('projects/', views.projects),
    path('tags/', views.tags)
]
