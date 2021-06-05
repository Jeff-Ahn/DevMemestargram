from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage


class ImageStorage(S3Boto3Storage):
    location = settings.AWS_PUBLIC_IMAGE_LOCATION
    file_overwrite = False

    def __init__(self, *args, **kwargs):
        kwargs["custom_domain"] = settings.AWS_CLOUDFRONT_DOMAIN
        super(ImageStorage, self).__init__(*args, **kwargs)
