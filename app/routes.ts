import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index(         "routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("links", "routes/links.tsx"),
	// Apps specific stuff

	route("apps" , "routes/apps/layout.tsx", [
		index("routes/apps/apps.tsx"),
		route("koharu", "routes/apps/koharu/layout.tsx", [
			index("routes/apps/koharu/koharu-diary.tsx")
		]),
		route("exedra-calc", "routes/apps/exedra-damage-calculator.tsx"),
	]),
] satisfies RouteConfig;
