from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("api/admin/", admin.site.urls),
    path("api/accounts/", include("dj_rest_auth.urls")),
    path("api/accounts/", include("dj_rest_auth.registration.urls")),
    path("api/accounts/", include("allauth.urls")),
    path("api/accounts/", include("accounts.urls")),
    path("api/", include("meme.urls")),
    path("api/", include("tag.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
