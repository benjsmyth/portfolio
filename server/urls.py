from django.urls import path
from .views import *

urlpatterns = [
    path('abouts/', abouts),
    path('projects/', projects),
    path('tags/', tags),
    path('mail/', mail)
]
