<script>
  import { onMount, onDestroy } from 'svelte';
  import pkg from 'mapbox-gl';
  const { Map } = pkg;
  import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';

  let map;
  let mapContainer;
  let lng, lat, zoom, pitch, bearing;
  let isDarkMode;

  // Starting data
  lng = -83.1099;
  lat = 40.1021;
  zoom = 18.35;
  pitch = 48.56313198624079;
  bearing = 128.29087118596465;

  // Update data when the map moves
  function updateData() {
    zoom = map.getZoom();
    lng = map.getCenter().lng;
    lat = map.getCenter().lat;
    pitch = map.getPitch();
    bearing = map.getBearing();
  }

  onMount(() => {
    // Initialize map
    map = new Map({
      container: mapContainer,
      accessToken:
        'pk.eyJ1Ijoic3RhY2syNzU0IiwiYSI6ImNsa2ExcjYybzAyY2UzY3BoODluYWNwNHEifQ.3VEJkpyfWNjLcgqVZ7N55w',
      style: 'mapbox://styles/mapbox/standard',
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
      bearing: bearing,
      attributionControl: false,
    });

    // Get system theme and listen for system theme changes
    map.on('style.load', () => {
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
          isDarkMode = event.matches;
        });
    });

    map.on('move', () => {
      updateData();
    });
  });

  // Destroy map on unmount
  onDestroy(() => {
    map = null;
  });

  // Detect when isDarkMode changes and update map theme
  $: {
    if (isDarkMode === true) {
      map.setConfigProperty('basemap', 'lightPreset', 'night');
    } else if (isDarkMode === false) {
      map.setConfigProperty('basemap', 'lightPreset', 'day');
    }
  }
</script>

<div class="map" bind:this={mapContainer} />

<style>
  .map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
