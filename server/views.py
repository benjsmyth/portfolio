from django.http import JsonResponse
from .models import *

def briefs(request):
    """Fetch a list of briefs currently in the database."""
    briefs = []
    for brief in Brief.objects.all():
        briefs.append({
            'id': brief.id,
            'topic': brief.topic,
            'desc': brief.description,
            'content': brief.content
        }
    )
    response = JsonResponse(briefs, safe=False)
    response['Access-Control-Allow-Origin'] = 'http://localhost:8000'
    return response

def projects(request):
    """Fetch a list of projects currently in the database."""
    projects = []
    for project in Project.objects.all().prefetch_related('tags'):
        projects.append({
            'id': project.id,
            'date': project.date,
            'update': project.update,
            'title': project.title,
            'desc': project.description,
            'content': project.content,
            'tags': sorted([tag.keyword for tag in project.tags.all()])
        }
    )
    response = JsonResponse(projects, safe=False)
    response['Access-Control-Allow-Origin'] = 'http://localhost:8000'
    return response

def tags(request):
    """Fetch a list of tags currently in the database."""
    tags = []
    for tag in Tag.objects.all().prefetch_related('projects'):
        tags.append({
            'id': tag.id,
            'keyword': tag.keyword,
            'projects': sorted([project.title for project in tag.projects.all()])
        }
    )
    response = JsonResponse(tags, safe=False)
    response['Access-Control-Allow-Origin'] = 'http://localhost:8000'
    return response
