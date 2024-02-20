<script>
  import { onMount, onDestroy } from 'svelte';
  import { Map } from 'mapbox-gl';
  import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';

  let map;
  let mapContainer;
  let lng, lat, zoom, pitch, bearing;

  lng = -83.1099;
  lat = 40.1021;
  zoom = 18.35;
  pitch = 48.56313198624079;
  bearing = 128.29087118596465;

  function updateData() {
    zoom = map.getZoom();
    lng = map.getCenter().lng;
    lat = map.getCenter().lat;
    pitch = map.getPitch();
    bearing = map.getBearing();
  }

  onMount(() => {
    const initialState = {
      lng: lng,
      lat: lat,
      zoom: zoom,
      pitch: pitch,
      bearing: bearing,
    };

    map = new Map({
      container: mapContainer,
      accessToken:
        'pk.eyJ1Ijoic3RhY2syNzU0IiwiYSI6ImNsa2ExcjYybzAyY2UzY3BoODluYWNwNHEifQ.3VEJkpyfWNjLcgqVZ7N55w',
      style: 'mapbox://styles/stack2754/clsqkity3006a01o19ucrh05z',
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      pitch: initialState.pitch,
      bearing: initialState.bearing,
    });

    map.on('move', () => {
      updateData();
    });

    map.on('load', () => {
      // Add 3D buildings and remove label layers to enhance the map
      const layers = map.getStyle().layers;
      let labelLayerId;
      for (const layer of layers) {
        if (layer.type === 'symbol' && layer.layout['text-field']) {
          // remove text labels
          // map.removeLayer(layer.id);
          labelLayerId = layer.id;
          console.log(layer.id);
        }
      }

      // Add the label layer again so it's on top of the buildings
      if (labelLayerId) {
        const labelLayer = layers.find(layer => layer.id === labelLayerId);
        map.addLayer(labelLayer);
      }
    });
  });
</script>

<div>
  <!-- <div class="sidebar">
    Longitude: {lng.toFixed(4)} | Latitude: {lat.toFixed(4)} | Pitch: {pitch} | Bearing:
    {bearing} | Zoom:
    {zoom.toFixed(2)}
  </div> -->
  <div class="">
    <div class="map" bind:this={mapContainer} />
  </div>
</div>

<style>
  .map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .sidebar {
    background-color: rgb(35 55 75 / 90%);
    color: #fff;
    padding: 6px 12px;
    font-family: monospace;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    margin: 12px;
    border-radius: 4px;
  }
</style>
