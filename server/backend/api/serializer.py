from rest_framework import serializers
from .models import Country, State, City, County

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class CountySerializer(serializers.ModelSerializer):
    class Meta:
        model = County
        fields = '__all__' 

class StateSerializer(serializers.ModelSerializer):
    counties = CountySerializer(many=True, read_only=True)
    cities = CitySerializer(many=True, read_only=True)

    class Meta:
        model = State
        fields = '__all__'

class CountrySerializer(serializers.ModelSerializer):
    states = StateSerializer(many=True, read_only=True)

    class Meta:
        model = Country
        fields = '__all__'