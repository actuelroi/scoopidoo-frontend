import type { NextConfig } from "next";
import { hostname } from "os";
import { remoteSnapshots } from "sanity";

const nextConfig: NextConfig = {
  /* config options here */

  images:{
    remotePatterns:[
      {
        protocol:'https', hostname:'cdn.sanity.com'
      }
    ]
  }
};

export default nextConfig;
