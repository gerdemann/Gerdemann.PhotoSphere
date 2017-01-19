function initPhotoSphere() {
    var photosphereElements = document.getElementsByClassName('gerdemann-photosphere');
    for (var i = 0; i < photosphereElements.length; i++) {
        var panorama = new google.maps.StreetViewPanorama(
            photosphereElements[i],
            {
                pano: photosphereElements[i].id,
                visible: true,
                panoProvider: getCustomPanorama
            }
        );
    }
}

function getCustomPanorama(pano, zoom, tileX, tileY) {
    return {
        location: {
            pano: pano,
            description: document.getElementById(pano).dataset.headline,
        },
        links: [],
        copyright: document.getElementById(pano).dataset.copyright,
        tiles: {
            tileSize: new google.maps.Size(
                document.getElementById(pano).dataset.imagewidth, 
                document.getElementById(pano).dataset.imageheight
            ),
            worldSize: new google.maps.Size(
                document.getElementById(pano).dataset.imagewidth, 
                document.getElementById(pano).dataset.imageheight
            ),
            centerHeading: 0,
            getTileUrl: function(pano, zoom, tileX, tileY) {
                return document.getElementById(pano).dataset.image;
            }
        }
    };
}