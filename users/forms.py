# -*- coding: utf-8 -*-
 
from django.forms import ModelForm, Form, fields, PasswordInput
from models import UserProfile, UserOrderDataFiz
from django.forms.widgets import TextInput
 
class ProfileForm(ModelForm):
    class Meta:
        model = UserProfile
        exclude = ('user', )
        
        
class RegisterForm(Form):
    fio = fields.CharField(label=u'ФИО')
    is_legal = fields.BooleanField(label=u'Юр лицо?', required=False)
    email = fields.EmailField(label=u'email')
    password_1 = fields.CharField(label=u'пароль 1', widget=PasswordInput)
    password_2 = fields.CharField(label=u'пароль 2', widget=PasswordInput)
    
        
class OrderDataFizForm(ModelForm):
    
    class Meta:
        model = UserOrderDataFiz
        exclude = ('user', )
        fields = ('fio', 'passport', 'address', 'contacts')

    fio = fields.CharField(label = u'ФИО')

