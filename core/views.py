# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from django.core.mail import send_mail
from django.conf import settings 

from home.models import *
from .forms import ContactPlaneta

# Create your views here.

from django.http import HttpResponse

def index(request):
	success = False
	if request.method == 'POST':
		
		form = ContactPlaneta(request.POST)
		if form.is_valid():
			name = form.cleaned_data['name']
			about = form.cleaned_data['about']
			email = form.cleaned_data['email']
			phone = form.cleaned_data['phone']
			message = form.cleaned_data['message']
			subject = 'Contato sobre:{0} '.format(about)
			message = 'Nome: {0}\nE-mail:{1}\nTelefone:{2}\nMensagem:{3}'.format(name, email, phone, message)
			form = ContactPlaneta()

			send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [settings.DEFAULT_FROM_EMAIL])
			success = True
	else:
		form = ContactPlaneta()


	context = {
		'carousel': SlideShow.objects.all(),
		'quemsomos': AboutMe.objects.all(), 
		'service': Service.objects.all(),
		'form':form,
	 	'success':success,
	}
	return render(request, 'index.html', context)


