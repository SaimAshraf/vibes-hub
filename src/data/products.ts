import mess from "@/assets/nexivo-mess.jpg";
import factory from "@/assets/nexivo-factory.jpg";
import commerce from "@/assets/nexivo-commerce.jpg";

export type Product = {
  slug: string; name: string; descriptor: string; audience: string; image: string;
  promise: string; modules: string[]; strengths: string[]; timeline: string;
};

export const products: Product[] = [
  { slug: "bizzops", name: "BizzOps", descriptor: "Advanced e-commerce ERP", audience: "Commerce teams", image: commerce, promise: "Bring orders, inventory, fulfilment and business control into one connected operation.", modules: ["Order control", "Inventory sync", "Customer records", "Fulfilment workflows", "Business reporting", "Operational automation"], strengths: ["One view across commerce operations", "Fewer manual hand-offs", "Built for growing order volume"], timeline: "Configured around your commerce workflow" },
  { slug: "fms", name: "FMS", descriptor: "Factory Management System", audience: "Food & beverage manufacturers", image: factory, promise: "Trace every ingredient from supplier and GRN to recipe, batch, carton, invoice and ledger.", modules: ["Suppliers", "Purchase orders", "Goods received notes", "Inventory & warehouse", "Recipes & production", "Cartons & packaging", "Customers & invoices", "Ledgers & analytics"], strengths: ["Standardized recipes and batches", "Ingredient-to-carton traceability", "Connected procurement and accounts"], timeline: "A unified 12-module production system" },
  { slug: "mess-erp", name: "Mess ERP", descriptor: "Institutional hospitality operations", audience: "Messes & officers’ institutes", image: mess, promise: "A single accountable system for rooms, guests, food, events, finance and facilities.", modules: ["Room booking", "Guest portal", "Food & POS", "Invoicing", "Finance & ledger", "Inventory", "Halls & events", "Staff & maintenance", "Roles & access", "Reports"], strengths: ["QR-based guest self-service", "Complete auditability", "Cloud or on-premise deployment"], timeline: "Go live in as little as six weeks" },
  { slug: "pims", name: "PIMS", descriptor: "Production Inventory Management", audience: "Industrial & chemical manufacturing", image: factory, promise: "Control materials, formulas, production batches and compliance from one source of truth.", modules: ["Dashboard & analytics", "Materials & categories", "Units of measure", "Recipes & bill of materials", "Batch tracking", "Suppliers & purchase orders", "Customers & reports", "Audit trail & access control"], strengths: ["Formula version control", "Raw-material-to-batch traceability", "Tamper-evident audit history"], timeline: "Go live in as little as four weeks" },
];