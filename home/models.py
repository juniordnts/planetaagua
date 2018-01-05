# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


# ------------------Slide Show ------------------
class SlideShow(models.Model):
    title = models.CharField('Título', max_length=300)
    description = models.TextField('Descrição', max_length=500)
    
    image = models.ImageField(upload_to='home/slide', verbose_name='Imagem')

    
    class Meta:
        verbose_name = 'Slide'
        verbose_name_plural = 'Slides'
        ordering = ['title']

    def __str__(self):
        return self.title


# --------------- Quem somos -----------------------
class AboutMe(models.Model):
	ago = models.IntegerField('Ano')
	description = models.CharField('Descrição', max_length=500)
	image = models.ImageField(upload_to='home/quemsomos', verbose_name='Imagem')

	class Meta:
		verbose_name = 'Quem Somos'
		verbose_name_plural = 'Quem Somos'
		ordering = ['ago']

	def __int__(self):
		return self.ago

#  --------------- Serviços -----------------------
class Service(models.Model):
	mainImage = models.ImageField(upload_to='home/servicos', verbose_name='Imagem Principal')
	service = models.CharField('Seviço', max_length=300)
	slug = models.SlugField('Atalho', unique=True, blank=True)
	description = models.CharField('Descrição do serviço', max_length=1000)
	modalImage1 = models.ImageField(upload_to='home/servicos', verbose_name='Imagem de exemplo 1')
	modalImage2 = models.ImageField(upload_to='home/servicos', verbose_name='Imagem de exemplo 2')
	modalImage3 = models.ImageField(upload_to='home/servicos', verbose_name='Imagem de exemplo 3')

	class Meta:
		verbose_name = 'Serviço'
		verbose_name_plural = 'Serviços'
		ordering = ['service']


	def __str__(self):
		return self.service