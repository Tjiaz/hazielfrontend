from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(verbose_name="email address",max_length=255,unique=True)
    date_of_birth = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
class Contact(models.Model):
    name=models.CharField(max_length=50)
    email= models.EmailField()
    desc=models.TextField(max_length=500)
    phonenumber = models.CharField(max_length=20)


    def __str__(self) -> str:
        return (self.name)


    