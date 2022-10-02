import json

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
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
            location = locator.geocode(market.location)
            coordinates = {
                'lat': location.latitude,
                'lng': location.longitude
            }
            obj['coordinates'] = coordinates
        except:
            pass
        stand_pictures = []
        for stand in market.stand_set.all():
            stand_pictures.append(stand.picture)
        obj['stand_pictures'] = stand_pictures
        markets.append(obj)
    return JsonResponse(markets, safe=False)


def get_market_detail(request, pk):
    stock = []
    market = get_object_or_404(Market, pk=pk)
    merchants = []
    for stand in market.stand_set.all():
        for item in stand.item_set.all():
            price = len(item.name)
            price = price + price % 5 + price % 3 + (price * price * price - price + price * price * 3) % 13
            price %= 9
            stock.append({
                'item': item.name,
                'price': f'${price}/unit'
            })

        merchants.append({
            'image': stand.picture,
            'name': stand.name,
            'products': ', '.join([item.name for item in stand.item_set.all()])
        })

    return JsonResponse({
        'stock': stock,
        'merchants': merchants
    })

