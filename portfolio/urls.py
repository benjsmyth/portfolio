"""
For more information please see:
https://docs.djangoproject.com/en/4.0/topics/http/urls/.
"""

from django.contrib import admin
from django.urls import path
from server import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('abouts/', views.abouts),
    path('projects/', views.projects),
    path('tags/', views.tags)
]
