from rest_framework.decorators import (
    api_view,
    permission_classes,
)

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)

from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.tokens import (
    RefreshToken,
)

from django.contrib.auth import authenticate

from .models import User


@api_view(["POST"])
@permission_classes([AllowAny])
def register_user(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    if not username or not password:
        return Response(
            {
                "error": "Username and password required"
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    if User.objects.filter(
        username=username
    ).exists():
        return Response(
            {
                "error": "User already exists"
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    user = User.objects.create_user(
        username=username,
        email=email,
        password=password,
    )

    refresh = RefreshToken.for_user(user)

    return Response(
        {
            "refresh": str(refresh),
            "access": str(
                refresh.access_token
            ),
            "user": {
                "username": user.username,
                "email": user.email,
            },
        },
        status=status.HTTP_201_CREATED,
    )


@api_view(["POST"])
@permission_classes([AllowAny])
def login_user(request):
    username = request.data.get(
        "username"
    )

    password = request.data.get(
        "password"
    )

    user = authenticate(
        username=username,
        password=password,
    )

    if user is not None:
        refresh = RefreshToken.for_user(
            user
        )

        return Response(
            {
                "refresh": str(refresh),
                "access": str(
                    refresh.access_token
                ),
                "user": {
                    "username": user.username,
                    "email": user.email,
                },
            }
        )

    return Response(
        {"error": "Invalid credentials"},
        status=status.HTTP_401_UNAUTHORIZED,
    )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_me(request):
    user = request.user

    return Response(
        {
            "username": user.username,
            "email": user.email,
        }
    )


@api_view(["PUT", "PATCH"])
@permission_classes([IsAuthenticated])
def update_profile(request):
    user = request.user

    user.first_name = request.data.get(
        "first_name",
        user.first_name,
    )

    user.last_name = request.data.get(
        "last_name",
        user.last_name,
    )

    user.email = request.data.get(
        "email",
        user.email,
    )

    new_password = request.data.get(
        "password"
    )

    if new_password:
        user.set_password(new_password)

    user.save()

    return Response(
        {
            "message": "Profile updated"
        }
    )