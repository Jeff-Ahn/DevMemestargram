from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User
from allauth.socialaccount.models import SocialAccount
from rest_framework import status
from json.decoder import JSONDecodeError
from django.conf import settings
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.github import views as github_view
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


BASE_URL = "http://localhost:8000/api/"
GITHUB_CALLBACK_URI = "http://localhost:3000/callback/"


@api_view(["POST"])
@permission_classes([AllowAny])
def github_callback(request):
    client_id = settings.SOCIAL_AUTH_GITHUB_CLIENT_ID
    client_secret = settings.SOCIAL_AUTH_GITHUB_SECRET
    code = request.data["code"]
    """
    Access Token Request
    """
    token_req = requests.post(
        f"https://github.com/login/oauth/access_token?client_id={client_id}&client_secret={client_secret}&code={code}&accept=&json&redirect_uri={GITHUB_CALLBACK_URI}&response_type=code",
        headers={"Accept": "application/json"},
    )
    token_req_json = token_req.json()
    error = token_req_json.get("error")
    if error is not None:
        raise JSONDecodeError(error)
    access_token = token_req_json.get("access_token")
    """
    Email Request
    """
    user_req = requests.get(
        f"https://api.github.com/user",
        headers={"Authorization": f"Bearer {access_token}"},
    )
    user_json = user_req.json()
    error = user_json.get("error")
    if error is not None:
        raise JSONDecodeError(error)
    email = user_json.get("email")
    """
    Signup or Signin Request
    """
    try:
        user = User.objects.get(email=email)
        # ????????? ????????? ????????? Provider??? github??? ????????? ?????? ??????, ????????? ?????????
        # ?????? SNS??? ????????? ??????
        social_user = SocialAccount.objects.get(user=user)
        if social_user is None:
            return JsonResponse(
                {"err_msg": "email exists but not social user"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        if social_user.provider != "github":
            return JsonResponse(
                {"err_msg": "no matching social type"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        # ????????? github??? ????????? ??????
        data = {"access_token": access_token, "code": code}
        accept = requests.post(f"{BASE_URL}accounts/github/login/finish/", data=data)
        accept_status = accept.status_code
        if accept_status != 200:
            return JsonResponse({"err_msg": "failed to signin"}, status=accept_status)
        accept_json = accept.json()
        accept_json.pop("user", None)
        return JsonResponse(accept_json)
    except User.DoesNotExist:
        # ????????? ????????? ????????? ????????? ?????? ??????
        data = {"access_token": access_token, "code": code}
        accept = requests.post(f"{BASE_URL}accounts/github/login/finish/", data=data)
        accept_status = accept.status_code
        if accept_status != 200:
            return JsonResponse({"err_msg": "failed to signup"}, status=accept_status)
        # user??? pk, email, first name, last name??? Access Token, Refresh token ?????????
        accept_json = accept.json()
        accept_json.pop("user", None)
        return JsonResponse(accept_json)


class GithubLogin(SocialLoginView):
    """
        If it's not working
        You need to customize GitHubOAuth2Adapter
        use header instead of params
        -------------------
        def complete_login(self, request, app, token, **kwargs):
            params = {'access_token': token.token}
    TO
    def complete_login(self, request, app, token, **kwargs):
            headers = {'Authorization': 'Bearer {0}'.format(token.token)}
        -------------------
    """

    adapter_class = github_view.GitHubOAuth2Adapter
    callback_url = GITHUB_CALLBACK_URI
    client_class = OAuth2Client


@api_view(["GET"])
@permission_classes([AllowAny])
def get_user_email(request, pk):
    try:
        email = User.objects.get(pk=pk).email
        return JsonResponse(
            {"email": email},
            status=status.HTTP_200_OK,
        )
    except User.DoesNotExist:
        return JsonResponse(
            {"err_msg": "Can't find the user"}, status=status.HTTP_404_NOT_FOUND
        )
