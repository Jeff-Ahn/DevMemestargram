import os
import uuid
from django.utils.timezone import now
from django.conf import settings
import boto3


def upload_image(instance, filename):
    filename_base, filename_ext = os.path.splitext(filename)

    return "%s" % (now().strftime("%Y%m%d") + "_" + str(uuid.uuid4()) + filename_ext)


def delete_image(filename):
    bucket = settings.AWS_STORAGE_BUCKET_NAME
    client = boto3.client("s3")
    response = client.delete_object(Bucket=bucket, Key=filename)
    return response
