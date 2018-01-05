# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import *

class SlideShowAdmin(admin.ModelAdmin):
	list_display = ['title','description', 'image']
	search_fields = ['title']

admin.site.register(SlideShow, SlideShowAdmin)


class AboutMeAdmin(admin.ModelAdmin):
	list_display = ['ago','description', 'image']
	search_fields = ['title']

admin.site.register(AboutMe, AboutMeAdmin)

class ServiceAdmin(admin.ModelAdmin):
	list_display = ('service','mainImage', 'description')
	search_fields = ['service']
	prepopulated_fields = { 'slug':['service']}

admin.site.register(Service, ServiceAdmin)

