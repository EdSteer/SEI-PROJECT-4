# Generated by Django 3.2.9 on 2021-12-01 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0002_rename_catatalog_number_record_catalog_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='video',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='record',
            name='title',
            field=models.CharField(default=None, max_length=100),
        ),
    ]
