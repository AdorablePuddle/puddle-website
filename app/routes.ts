import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index(         "routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("links", "routes/links.tsx"),
	route("apps" , "routes/apps.tsx" ),
] satisfies RouteConfig;
