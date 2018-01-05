from django import forms
from django.conf import settings 



class ContactPlaneta(forms.Form):
	name = forms.CharField(label='Nome', max_length=100)
	email = forms.EmailField(label = 'Email')
	about = forms.CharField(label = 'Assunto', required=False)
	phone = forms.CharField(label = 'Telefone',max_length=15, required=False)
	message = forms.CharField(label='Mensagem', widget=forms.Textarea)