"""
For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/http/urls/.
"""

from django.contrib import admin
from django.urls import path
from server.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('abouts/', abouts),
    path('projects/', projects),
    path('tags/', tags),
    path('mail/', mail)
]
