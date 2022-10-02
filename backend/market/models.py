from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Market(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    hours = models.CharField(max_length=255)
    description = models.TextField(blank=True)


    def __str__(self):
        return self.name

class Merchant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=255)

    def __str__(self):
        return self.user.username

class Stand(models.Model):
    market = models.ForeignKey(Market, on_delete=models.CASCADE)
    owner = models.ForeignKey(Merchant, on_delete=models.CASCADE)
    hours = models.CharField(max_length=255)
    picture = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.owner.user.first_name

class Item(models.Model):
    name = models.CharField(blank=False, max_length=255)
    stand = models.ForeignKey(Stand, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

