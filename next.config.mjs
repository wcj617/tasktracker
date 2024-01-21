/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    // Enable additional route caching when users navigate through pages with next/link.
    cacheOnFrontEndNav: true,
    //  Cache every <link rel="stylesheet" /> and <script /> on frontend navigation. Requires cacheOnFrontEndNav to be enabled.
    aggressiveFrontEndNavCaching: true,
    // Reload the app when it has gone back online.
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    }

});

const nextConfig = {};
export default withPWA({
    // Your Next.js config
    output: "standalone",
});
