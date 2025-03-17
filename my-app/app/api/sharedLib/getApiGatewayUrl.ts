export const getApiGatewayUrl = (): { url: string; key: string } => {
  const isServer = typeof window === "undefined";
  const hostname = isServer
    ? process.env.NEXT_PUBLIC_APP_HOST
    : window.location.hostname;
  if (!hostname) throw new Error("Hostname is not defined");
  if (hostname.includes("localhost")) {
    // Development environment
    return {
      url: process.env.NEXT_PUBLIC_DEV_URI || "",
      key: process.env.NEXT_PUBLIC_DEV_SUBSCRIPTION_KEY || "",
    };
  } else if (hostname.includes("dev")) {
    // Staging or Development environment
    return {
      url: process.env.NEXT_PUBLIC_DEV_URI || "",
      key: process.env.NEXT_PUBLIC_DEV_SUBSCRIPTION_KEY || "",
    };
  } else {
    // Production environment
    return {
      url: process.env.NEXT_PUBLIC_PROD_URI || "",
      key: process.env.NEXT_PUBLIC_PROD_SUBSCRIPTION_KEY || "",
    };
  }
};
