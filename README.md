Gerdemann.PhotoSphere
===========================

Neos plugin for Google PhotoSphere

How-To:
-------

* Install the package to ``Packages/Plugin/Gerdemann.PhotoSphere`` (e.g. via ``composer require gerdemann/photosphere:~2.0``)
* Put the Google API Key in your Settings.yaml:
  
  ```
  Gerdemann:
    PhotoSphere:
      googleApiKey: 'ENTER_HERE_THE_GOOGLE_API_KEY'
  ```
* Insert the new Element ``PhotoSphere`` and choose your 360° image
* Publish all changes

Now you should see the Google PhotoSphere iFrame in the frontend.

Version hint
-------

The Version 1.* is compatible with Neos 2.0, but this version is no longer supported. 
For Neos 3.0 versions 2. * can be used.

License
-------

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.
