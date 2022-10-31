
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views.generic import ListView, DetailView
from .models import Blog

# using listview to display all blog posts in the database
class IndexView(ListView):
    # html template
    template_name = 'blog/index.html'
    # what reference will be used for the data in the html file
    context_object_name = 'blog_posts'

    # get the blogs from the database
    def get_queryset(self):
        return Blog.objects.order_by('-pub_date')

# using deatailview to display the blogs content and details
class BlogContent(DetailView):
    model = Blog
    
    # html template
    template_name = 'blog/blog_content.html'