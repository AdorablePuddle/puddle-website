import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
	index(         "routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("links", "routes/links.tsx"),
	// Apps specific stuff

	route("apps" , "routes/apps/layout.tsx", [
		index("routes/apps/apps.tsx"),
		route("koharu-diary", "routes/apps/koharu/koharu-diary.tsx")
	]),
] satisfies RouteConfig;
