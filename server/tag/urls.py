from rest_framework import routers
from . import views
from django.urls import path, include

router = routers.DefaultRouter()

router.register("tag", viewset=views.TagViewset, basename="tag")

urlpatterns = [path("", include(router.urls))]
