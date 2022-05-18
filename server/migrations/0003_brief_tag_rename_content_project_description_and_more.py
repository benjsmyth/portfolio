# Generated by Django 4.0.4 on 2022-05-17 08:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_alter_project_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brief',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(max_length=8)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('keyword', models.CharField(max_length=50)),
            ],
        ),
        migrations.RenameField(
            model_name='project',
            old_name='content',
            new_name='description',
        ),
        migrations.AddField(
            model_name='project',
            name='date',
            field=models.DateField(default=datetime.date(2022, 5, 17)),
        ),
        migrations.AddField(
            model_name='project',
            name='html',
            field=models.TextField(default='default'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='update',
            field=models.DateField(auto_now=True),
        ),
    ]
