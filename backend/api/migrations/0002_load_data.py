from django.db import migrations
from django.core.management import call_command


def forwards_func(apps, schema_editor):
  print('forwards')
  call_command('load_demo_data', verbosity=2)


def reverse_func(apps, schema_editor): 
  call_command('flush', '--no-input', verbosity=2)
  print('reverse')


class Migration(migrations.Migration):
  dependencies = [
    ('api','0001_initial'),
  ]
  operations = [
    migrations.RunPython(forwards_func, reverse_func, elidable=False)
  ]