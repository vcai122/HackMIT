from geopy.geocoders import Nominatim

locator = Nominatim(user_agent="myGeocoder")
location = locator.geocode("77 Massachusetts Ave, Cambridge, MA 02139")

print(location.latitude, location.longitude)