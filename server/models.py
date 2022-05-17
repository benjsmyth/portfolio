from django.db import models

class Project(models.Model):
    """A project being displayed within this portfolio."""

    title = models.CharField(max_length=50)
    content = models.TextField()

    def __str__(self):
        return self.title
