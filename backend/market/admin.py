from django.contrib import admin

# Register your models here.
from market.models import Market, Merchant, Stand, Item

admin.site.register(Market)
admin.site.register(Merchant)
admin.site.register(Stand)
admin.site.register(Item)