from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import *

def abouts(request: object) -> JsonResponse:
    abouts = {}
    for about in About.objects.all():
        abouts[about.id] = {
            'id': about.id,
            'topic': about.topic,
            'desc': about.description,
            'content': about.content
        }
    return JsonResponse(abouts)

def projects(request: object) -> JsonResponse:
    projects = {}
    for project in Project.objects.all().prefetch_related('tags'):
        projects[project.id] = {
            'id': project.id,
            'date': project.date,
            'update': project.update,
            'title': project.title,
            'desc': project.description,
            'content': project.content,
            'tags': [tag.keyword for tag in project.tags.all()]
        }
    return JsonResponse(projects)

def tags(request: object) -> JsonResponse:
    tags = {}
    for tag in Tag.objects.all().prefetch_related('projects'):
        tags[tag.id] = {
            'id': tag.id,
            'keyword': tag.keyword,
            'projects': [project.title for project in tag.projects.all()]
        }
    return JsonResponse(tags)

def mail(request: object) -> HttpResponse | HttpResponseRedirect:
    return HttpResponse('response')
    # email = request.POST.get("email", "")
    # subject = request.POST.get("subject", "")
    # message = request.POST.get("message", "")
    # if subject and message and email:
    #     try:
    #         send_mail(subject, message, email, ["smythjben@gmail.com"])
    #     except BadHeaderError:
    #         return HttpResponse("Bad header error!")
    #     return HttpResponseRedirect("/contact")
    # else:
    #     # In reality we'd use a form class
    #     # to get proper validation errors.
    #     return HttpResponse("Make sure all fields are entered and valid.")
