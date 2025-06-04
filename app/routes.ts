import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayout.tsx",
        [
            index("./pages/home.tsx"),
            route('pokemon/:id_or_name', "./pages/pokemon-details-page/PokemonDetailsPage.tsx")
        ]
    )
] satisfies RouteConfig;
