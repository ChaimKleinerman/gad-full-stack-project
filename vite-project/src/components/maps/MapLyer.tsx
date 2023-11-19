import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Zoom, MousePosition } from "ol/control";
import { createStringXY } from "ol/coordinate";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import VectorLayer from "ol/layer/Vector";
import Icon from "ol/style/Icon";
import Overlay from "ol/Overlay";
import Popup from "./Popup";
import iconStore from "../../assets/Pin.svg";
import { fromLonLat } from "ol/proj";

interface Props {
  coordinate1: number;
  coordinate2: number;
  coordinate3: number;
  coordinate4: number;
}

function MapComponent({ coordinate1, coordinate2, coordinate3, coordinate4 }: Props) {
  const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: "EPSG:4326",
    className: "custom-mouse-position",
  });
  const mapTargetElement = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | undefined>();
  const features = useRef<Feature[]>([]);
  const popup = useRef<Overlay | null>(null);
  const popupElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const positionStore = [coordinate1, coordinate2, coordinate3, coordinate4];

    const map = new Map({
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: [0, 0],
        zoom: 0,
        minZoom: 0,
        maxZoom: 28,
      }),
    });

    const vectorSource = new VectorSource({
      features: [],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new Icon({
          src: iconStore,
          width: 30,
          height: 30,
        }),
      }),
    });

    map.addLayer(vectorLayer);
    map.setTarget(mapTargetElement.current || "");
    setMap(map);

    vectorSource.clear();

    // Add the first feature
    const newFeature1 = new Feature({
      geometry: new Point(fromLonLat([coordinate1, coordinate2])),
    });

    // Add the second feature
    const newFeature2 = new Feature({
      geometry: new Point(fromLonLat([coordinate3, coordinate4])),
    });

    vectorSource.addFeatures([newFeature1, newFeature2]);

    if (popup.current) popupElement.current!.style.display = "none";

    if (!popupElement.current) return console.log("Problem");

    popup.current = new Overlay({
      element: popupElement.current,
      positioning: "bottom-center",
    });

    map.addOverlay(popup.current);

    return () => map.setTarget("");
  }, [coordinate1, coordinate2, coordinate3, coordinate4]);

  // ... (other code)

  return (
    <>
      <Popup popupRef={popupElement} />
      <div ref={mapTargetElement} style={{ width: "50%", height: "300px" }}></div>
    </>
  );
}

export default MapComponent;

