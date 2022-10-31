from django.urls import path

# the urls of different views
from . import views
app_name = 'blog'  # creates a namespace for this app
urlpatterns = [
    # mainpage/all blogs view
    path('', views.IndexView.as_view(), name='index'),
    # specific blog detail view
    path('<int:pk>/', views.BlogContent.as_view(), name='detail'), 
]
