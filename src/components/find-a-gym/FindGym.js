"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import LocationList from "./LocationList";
import MenuBar from "./MenuBar";

export default function FindGym() {
  const position = { lat: 12.940, lng: 77.704 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey="AIzaSyBijMMKhdJKoyHxhk5oNXtXFnWITdpJOkI">
      <MenuBar/>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId="80889b23048f4247">
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>I'm in Xthrive</p>
            </InfoWindow>
          )}
        </Map>
      </div>
      <LocationList/>
    </APIProvider>
    

  );
}