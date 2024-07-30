# Generated by Django 5.0.6 on 2024-06-10 08:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("store", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Sale",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "quantity",
                    models.PositiveIntegerField(default=0, verbose_name="Quantity"),
                ),
                (
                    "total_amount",
                    models.DecimalField(
                        decimal_places=2,
                        default=0.0,
                        max_digits=10,
                        verbose_name="Total_Amount",
                    ),
                ),
                (
                    "sale_date",
                    models.DateTimeField(auto_now_add=True, verbose_name="Sales_date"),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="sales",
                        to="store.categorie",
                        verbose_name="Categorie",
                    ),
                ),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="sales",
                        to="store.product",
                        verbose_name="Sales",
                    ),
                ),
            ],
            options={
                "verbose_name": "Sale",
                "verbose_name_plural": "Sales",
            },
        ),
    ]