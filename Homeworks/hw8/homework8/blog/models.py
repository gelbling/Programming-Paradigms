from django.db import models

# create Blog model for querying database
class Blog(models.Model):
    # blog's title 
    title = models.CharField(max_length=100)
    # blog's content
    content = models.CharField(max_length=5000)
    # blog's author
    author_name = models.CharField(max_length=100)
    # blog's published date
    pub_date = models.DateTimeField('date published')