from django.http import JsonResponse
from .models import Project

def retrieve(request):
    """Return a list of all projects currently in the database."""
    projects = []
    for project in Project.objects.all():
        projects.append({'content': project.content, 'id': project.id, 'title': project.title})
    response = JsonResponse(projects, safe=False)
    response['Access-Control-Allow-Origin'] = 'http://localhost:8000'
    return response
