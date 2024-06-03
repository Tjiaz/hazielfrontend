# from django.shortcuts import render
# from rest_framework import viewsets,status
# from .models import User
# from .serializers import UserSerializer
# from rest_framework.views import APIView
# from rest_framework.response import Response

import json
from django.contrib.auth import authenticate,login,logout
# from django.contrib.auth.models import User,auth
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie,csrf_exempt
from django.views.decorators.http import require_POST 
from django.shortcuts import render,redirect
from django.contrib import messages
from api.models import Contact,User
# Create your views here.


@require_POST
@csrf_exempt
def register_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    password2 = data.get('password2')

    if password == password2:
        if User.objects.filter(email=email).exists():
            return JsonResponse({'details': 'Email already exists'}, status=400)
        elif User.objects.filter(username=username).exists():
            return JsonResponse({'details': 'Username already used'}, status=400)
        else:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            return JsonResponse({'details': 'User successfully registered'}, status=201)
    else:
        return JsonResponse({'details': 'Passwords do not match'}, status=400)
    
@csrf_exempt
@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse({'details': "Please provide a username and password"})
    user = authenticate(username=username, password=password)
    if user is None:
        return JsonResponse({'details': "invalid credentials"},status=400)
    login(request,user)
    return JsonResponse({'details':'successfully logged in'},status=200)

def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'details':'You are not logged in'},status=400)
    logout(request)
    return JsonResponse({'details':'successfully logged out'})

@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'is_authenticated':'False'})
    return JsonResponse({'is_authenticated':'True'})
def whoami_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'is_authenticated':'False'})
    return JsonResponse({'username':request.user.username})


@csrf_exempt
@require_POST
def contact(request):
    name = request.POST.get("fullname")
    email = request.POST.get("email")
    desc = request.POST.get("desc")
    pnumber = request.POST.get("phone_number")
    myquery = Contact(name=name, email=email, desc=desc, phonenumber=pnumber)
    myquery.save()
    messages.info(request, "We will get back to you soon...")
    return JsonResponse({'message': 'Contact request submitted successfully'}, status=200)


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all().order_by("-id")
#     serializer_class = UserSerializer

# class UserCreate(APIView):
#     def post(self,request):
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)