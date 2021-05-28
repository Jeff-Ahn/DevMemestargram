import os
import uuid
from django.utils.timezone import now


def upload_image(instance, filename):
    filename_base, filename_ext = os.path.splitext(filename)

    return "%s" % (now().strftime("%Y%m%d") + "_" + str(uuid.uuid4()) + filename_ext)
