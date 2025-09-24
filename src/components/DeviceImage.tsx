"use client";
import Image from "next/image";
import React, { useState } from "react";
import devicePng from "@/../public/defectscan-device.png";
import { withBasePath } from "@/lib/basePath";

type DeviceImageProps = {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export default function DeviceImage({ width = 900, height = 600, className, priority }: DeviceImageProps) {
  const [src, setSrc] = useState(withBasePath(devicePng.src));
  const fallback =
    "https://images.unsplash.com/photo-1581091624246-75ea0b46f886?q=80&w=1960&auto=format&fit=crop";

  return (
    <Image
      src={src}
      alt="DefectScan AI device on wellhead"
      width={width}
      height={height}
      priority={priority}
      className={className}
      onError={() => setSrc(fallback)}
    />
  );
}


