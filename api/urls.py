from django.urls import path
from .views import TopStoriesView

urlpatterns = [
    path('top-stories/', TopStoriesView.as_view(), name='top-stories'),
] 