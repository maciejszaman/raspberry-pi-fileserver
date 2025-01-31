import React, { useEffect, useState } from "react";
import { Empty } from "./Empty/Empty";
import axios from "axios";
import * as SharedTypes from "../../shared/Shared.types";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

export const View = () => {
  const [photos, setPhotos] = useState<SharedTypes.Photo[]>([]);

  useEffect(() => {
    // Fetch all photos as an array, for now.

    axios.get("http://localhost:3000/photos").then((response) => {
      console.log(response);
      console.log(response.data);
      setPhotos(response.data);
    });
  }, []);

  return (
    <div>
      {photos ? (
        <div className="flex p-2 bg-[#242424]">
          <div className="grid grid-cols-4 gap-4">
            {/* Important */}
            {photos.map((photo: SharedTypes.Photo) => (
              <Card key={photo.id}>
                <CardHeader title={photo.name} />
                <CardPreview>
                  <img src={photo.url} alt={photo.name} />
                </CardPreview>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};
