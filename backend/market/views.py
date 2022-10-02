import json

from django.shortcuts import render
from django.http import Http404, JsonResponse, HttpResponse
from django.core import serializers


# Create your views here.
from market.models import Market, Merchant, Stand, Item
from geopy.geocoders import Nominatim


def get_markets(request):
    markets = []
    for market in Market.objects.all():
        obj = {
            name: getattr(market, name) for name in ['name', 'location', 'hours', 'description']
        }
        try:
            locator = Nominatim(user_agent="myGeocoder")
            target = locator.geocode(market.location)
            location = {
                'lat': target.latitude,
                'lng': target.longitude
            }
            obj['location'] = location
        except:
            pass
        stand_pictures = []
        for stand in market.stand_set.all():
            stand_pictures.append(stand.picture)
        obj['stand_pictures'] = stand_pictures
        markets.append(obj)
    return JsonResponse(markets, safe=False)

