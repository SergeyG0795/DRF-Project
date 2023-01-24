from django.urls import path, include
from rest_framework.routers import DefaultRouter
from usersapp.views import UserModelViewSet

users_router = DefaultRouter()
users_router.register('users', UserModelViewSet)
