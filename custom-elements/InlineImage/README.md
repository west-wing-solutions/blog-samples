# inline-image element
A custom element used to dislpay a placeholder image immediately, then replaced by the full image.

Follows up the technique described [here](https://westwingsolutions.com/articles/blog/image-inlining)

## Disclaimer
This element is a proof of concept and isn't by any means supposed to be used in production apps.

## Images
In order to create the preview image and its base64 representation, one can simply:
- shrink the full image to 1% of its size by running `convert skyline.jpeg -resize 1% preview.jpeg`
- generate the base64 data by running `base64 preview.jpeg`
