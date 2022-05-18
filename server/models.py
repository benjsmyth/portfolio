from datetime import date
from django.db import models


class Brief(models.Model):
    """A section of concise text
        describing an aspect of my life."""

    topic = models.CharField(max_length=9)
    description = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.topic


class Project(models.Model):
    """A collection of information
        displaying something that I've created."""

    date = models.DateField(default=date.today())
    update = models.DateField(auto_now=True)
    title = models.CharField(max_length=50)
    description = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.title


class Tag(models.Model):
    """A word or phrase
        annotating a Project."""

    keyword = models.CharField(max_length=25)
    projects = models.ManyToManyField(Project, related_name='tags')

    def __str__(self):
        return self.keyword
