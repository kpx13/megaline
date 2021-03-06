# -*- coding: utf-8 -*-
from django.db import models
from dashboard import string_with_title
import pytils

class Slider(models.Model):
    name = models.CharField(max_length='256', blank=True, verbose_name=u'заголовок')
    image = models.ImageField(upload_to=lambda instance, filename: 'uploads/slider/' + pytils.translit.translify(filename),
				max_length=256, verbose_name=u'картинка')
    text = models.CharField(max_length='1024', blank=True, verbose_name=u'текст')
    sort_parameter = models.IntegerField(default=0, blank=True, verbose_name=u'порядок сортировки', help_text=u'№ слайдера: 1й, 2й .. 5й')
    
    class Meta:
        verbose_name = 'слайдер'
        verbose_name_plural = 'слайдшоу на главной'
        ordering = ['sort_parameter']
        app_label = string_with_title("slideshow", u"Слайдшоу")
        
    
    def __unicode__(self):
        return str(self.sort_parameter)
