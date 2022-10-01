import json

from django.shortcuts import render
from django.http import Http404, JsonResponse


# Create your views here.
def test(request):
    print("WOW")
    return JsonResponse({'test': 123})
