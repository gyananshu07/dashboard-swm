import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useMap } from "react-leaflet";

const markerClusters = L.markerClusterGroup();
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

const MarkerClusterLandfill = ({ markers, addMarkers }) => {
  const map = useMap();

  useEffect(() => {
    markerClusters?.clearLayers();
    markers?.forEach(({ position, properties }) => {
      const marker = L.marker(
        new L.LatLng(position.latitude, position.longitude),
        {
          icon: customIcon,
        }
      );

      marker?.bindPopup(`<b>State:</b> ${properties.State}
      <br /> 
      <b>ULB/City:</b> ${properties.ULB_City} 
      <br />
      <b>Ward Number:</b> ${properties.wardNumber} 
      <br/> 
      <b>Ward Name:</b> ${properties.wardName}
      <br/>
      <b>Dumpsite Area (in Acres):</b> ${properties.DumpsiteArea}
      <br/> 
      <b>Dumpsite Current Height (Meters):</b> ${properties.DumpsiteCurrentHeight}
      <br/> 
      <b>Waste Quantity (in tons):</b> ${properties.WasteQuantity}`);

      marker?.addTo(markerClusters);
    });

    map?.addLayer(markerClusters);
  }, [markers, map]);

  map?.on("moveend", () => {
    addMarkers();
    const markersToAdd = [];
    markerClusters.clearLayers();
    markers?.forEach(({ position, properties }) => {
      const markerToAdd = L.marker(
        new L.LatLng(position.latitude, position.longitude),
        {
          icon: customIcon,
        }
      );

      markerToAdd?.bindPopup(`<b>State:</b> ${properties?.State}
      <br/> 
      <b>ULB/City:</b> ${properties?.ULB_City} 
      <br/>
      <b>ULB/City:</b> ${properties?.ULBCode} 
      <br/>
      <b>Ward Number:</b> ${properties?.wardNumber} 
      <br/> 
      <b>Ward Name:</b> ${properties?.wardName} 
      <br/> 
      <b>Landfill Area (in Acres):</b> ${properties?.LandFillArea}
      <br/> 
      <b>Designed Height (in Meters):</b> ${properties?.DesignedHeight}
      <br/> 
      <b>Current Height (in Meters):</b> ${properties?.CurrentHeight}`);

      if (markerToAdd !== undefined) {
        markersToAdd?.push(markerToAdd);
      }
    });

    markerClusters?.addLayers(markersToAdd);
  });

  return null;
};

export default MarkerClusterLandfill;
