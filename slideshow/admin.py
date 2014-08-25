# -*- coding: utf-8 -*-
from django.contrib import admin
import models

class SliderAdmin(admin.ModelAdmin):
    list_display = ('name', 'text', 'sort_parameter')
    
admin.site.register(models.Slider, SliderAdmin)