from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include
from api.views import contact  # Import the contact view

def index(request):
    return render(request, 'dist/index.html')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('contact/', contact, name='contact'),  # Define a separate URL pattern for the contact page
    path('', index, name='index'),  # Add this line for the root URL
]