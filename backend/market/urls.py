from django.urls import path
from . import views

urlpatterns = [
    path('markets', views.get_markets),
    path('markets/<int:pk>', views.get_market_detail),
]