from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("user", views.UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("<pk>/", views.get_user_email, name="get_user_email"),
    path("github/callback/", views.github_callback, name="github_callback"),
    path(
        "github/login/finish/",
        views.GithubLogin.as_view(),
        name="github_login_todjango",
    ),
]
