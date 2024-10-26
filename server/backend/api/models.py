from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=100)
    population = models.IntegerField()
    area = models.FloatField("Area in km^2")
    code = models.CharField(max_length=200)

class State(models.Model):
    name = models.CharField(max_length=200)
    population = models.IntegerField()
    area = models.FloatField("Area in km^2")
    code = models.CharField(max_length=200)
    gdp = models.FloatField()
    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='states')

class City(models.Model):
    name = models.CharField(max_length=200)
    population = models.IntegerField()
    area = models.FloatField("Area in km^2")
    code = models.CharField(max_length=200)
    timezone = models.CharField(max_length=5)
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='cities')

class County(models.Model):
    name = models.CharField(max_length=200)
    population = models.IntegerField()
    area = models.FloatField("Area in km^2")
    code = models.CharField(max_length=200)
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='counties')