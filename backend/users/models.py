from django.contrib.auth.models import User
from django.db import models

# Create your models here.
from market.models import Stand, Item


class Contract(models.Model):
    consumer = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    pickup = models.DateTimeField()

    def __str__(self):
        return self.item.name



