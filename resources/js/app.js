import React from "react";
import { render } from "react-dom";
import { InertiaApp } from "@inertiajs/inertia-react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function BitcoinApp() {
    return (
        <QueryClientProvider client={queryClient}>
            <InertiaApp
                initialPage={JSON.parse(el.dataset.page)}
                resolveComponent={name => require(`./Pages/${name}`).default}
            />
        </QueryClientProvider>
    );
}

const el = document.getElementById("app");

render(<BitcoinApp />, el);
