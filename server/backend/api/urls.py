from django.urls import path
from .views.countryViews import (get_countries, get_country, create_country, update_country)
from .views.stateViews import (get_states, get_state, create_state, update_state)
from .views.cityViews import (get_cities, get_city, create_city, update_city)
from .views.countyViews import (get_counties, get_county, create_county, update_county)

urlpatterns = [
    # Country URLs
    path('countries/', get_countries, name='get_countries'),
    path('countries/<int:id>/', get_country, name='get_country'),
    path('countries/create/', create_country, name='create_country'),
    path('countries/update/<int:id>/', update_country, name='update_country'),
    
    # State URLs
    path('states/', get_states, name='get_states'),
    path('states/<int:id>/', get_state, name='get_state'),
    path('states/create/', create_state, name='create_state'),
    path('states/update/<int:id>/', update_state, name='update_state'),

    # City URLs
    path('cities/', get_cities, name='get_cities'),
    path('cities/<int:id>/', get_city, name='get_city'),
    path('cities/create/', create_city, name='create_city'),
    path('cities/update/<int:id>/', update_city, name='update_city'),

    # County URLs
    path('counties/', get_counties, name='get_counties'),
    path('counties/<int:id>/', get_county, name='get_county'),
    path('counties/create/', create_county, name='create_county'),
    path('counties/update/<int:id>/', update_county, name='update_county'),
]
