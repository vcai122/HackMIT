from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
def get_contracts(request):
    user = User.objects.first()
    ret = []
    for contract in user.contract_set.all():
        obj = {}
        owner = contract.item.stand.owner
        obj['name'] = owner.user.first_name + ' ' + owner.user.last_name
        obj['contact'] = owner.phone
        obj['market'] = contract.item.stand.market.name
        obj['produce'] = contract.item.name
        obj['quantity'] = contract.quantity
        obj['pickup'] = contract.pickup.strftime("%Y-%m-%d")
        ret.append(obj)
    return JsonResponse(ret, safe=False)
