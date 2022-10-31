from django.contrib import admin

# Register your models here.
from .models import Blog

# add Blog model permission to the admin
admin.site.register(Blog)