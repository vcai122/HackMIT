import json

from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from django.http import Http404, JsonResponse, HttpResponse
from django.core import serializers


# Create your views here.
from market.models import Market, Merchant, Stand, Item
from geopy.geocoders import Nominatim

from users.models import Contract


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


def get_contracts(request):
    merchant = User.objects.filter(pk=7).first().merchant
    ret = []
    for stand in merchant.stand_set.all():
        for item in stand.item_set.all():
            for contract in item.contract_set.all():
                obj = {}
                consumer = contract.consumer
                obj['name'] = consumer.first_name + ' ' + consumer.last_name
                obj['contact'] = '1234567890'
                obj['market'] = contract.item.stand.market.name
                obj['produce'] = contract.item.name
                obj['quantity'] = contract.quantity
                obj['pickup'] = contract.pickup.strftime("%Y-%m-%d")
                ret.append(obj)
    return JsonResponse(ret, safe=False)
