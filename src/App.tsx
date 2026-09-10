import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { SiteShell } from "./components/nexivo/SiteShell.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import Products from "./pages/Products.tsx";
import NexPos from "./pages/NexPos.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import WorkPage from "./pages/WorkPage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteShell />}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/nexpos" element={<NexPos />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
