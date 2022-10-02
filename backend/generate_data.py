from market.models import Market, Merchant, Stand, Item
from django.contrib.auth.models import User

merchants = []
for i in range(5):
    user = User.objects.create_user(username=f'farmer{i}', password='password', first_name=f'Jon{i}', last_name='Person', email=f'user{i}@test.com')
    user.save()
    merchant = Merchant.objects.create(user=user, phone=(str(i)*10)[:10])
    merchant.save()
    merchants.append(merchant)

market1 = Market.objects.create(
    name="Central Square Farmer's Market",
    location='76 Bishop Allen Dr, Cambridge, MA 02139',
    hours='Mondays 12 PM - 6 PM',
    description='Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
)
market1.save()

market2 = Market.objects.create(
    name="Central Circle Farmer's Market",
    location='73 Rook Allen Ln, Cambridge, MA 02139',
    hours='Fridays 12 PM - 6 PM',
    description='Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
)
market2.save()

stand1 = Stand.objects.create(
    market=market1,
    owner=merchants[0],
    hours='Open 1 PM - 6 PM',
)
stand1.save()
for item in ['Carrot', 'Squash', 'Pumpkin']:
    Item.objects.create(name=item, stand=stand1).save()

stand2 = Stand.objects.create(
    market=market1,
    owner=merchants[0],
    hours='Open 1 PM - 6 PM',
)
stand2.save()
for item in ['Fuji Apple', 'Golden Delicious']:
    Item.objects.create(name=item, stand=stand2).save()

stand3 = Stand.objects.create(
    market=market1,
    owner=merchants[0],
    hours='Open 1 PM - 6 PM',
)
stand3.save()
for item in ['Apple Cider', 'Apple Cider Donuts']:
    Item.objects.create(name=item, stand=stand3).save()

stand4 = Stand.objects.create(
    market=market2,
    owner=merchants[1],
    hours='Open 1 PM - 6 PM',
)
stand4.save()
for item in ['Peach', 'Flat Peach']:
    Item.objects.create(name=item, stand=stand4).save()

stand5 = Stand.objects.create(
    market=market2,
    owner=merchants[2],
    hours='Open 1 PM - 6 PM',
)
stand5.save()
for item in ['Fuji Apple', 'Golden Delicious']:
    Item.objects.create(name=item, stand=stand5).save()