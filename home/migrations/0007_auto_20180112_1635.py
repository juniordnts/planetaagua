# Generated by Django 2.0.1 on 2018-01-12 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_service_slug'),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Nome do cliente')),
                ('image', models.ImageField(upload_to='home/clientes', verbose_name='Imagem')),
            ],
            options={
                'verbose_name': 'Cleinte',
                'verbose_name_plural': 'Clientes',
            },
        ),
        migrations.AlterField(
            model_name='service',
            name='slug',
            field=models.SlugField(blank=True, unique=True, verbose_name='Atalho'),
        ),
    ]