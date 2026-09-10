import mess from "@/assets/nexivo-mess.jpg";
import factory from "@/assets/nexivo-factory.jpg";
import commerce from "@/assets/nexivo-commerce.jpg";

export type Pricing = { monthly: string; setup?: string; note: string; includes: string[] };

export type Product = {
  slug: string; name: string; descriptor: string; audience: string; image: string;
  promise: string; modules: string[]; strengths: string[]; timeline: string;
  site?: string; pricing?: Pricing;
};

export const products: Product[] = [
  {
    slug: "bizzops", name: "BizzOps", descriptor: "Advanced e-commerce ERP", audience: "Commerce teams", image: commerce,
    promise: "Bring orders, inventory, warehouses, couriers, riders, finance and your whole team into one connected operation.",
    modules: ["Smart inventory", "Order management", "Warehouse system", "Courier management", "Rider management", "Operations dashboards", "Financial management", "Task assignment", "Staff performance", "Role-based teams", "Security & access", "Reporting & analytics"],
    strengths: ["One source of truth across commerce operations", "Live rider and courier visibility", "Built for growing order volume"],
    timeline: "Live in as little as four weeks",
    site: "https://thebizzops.com",
    pricing: { monthly: "PKR 27,000", note: "All-inclusive monthly plan — no per-user fee, no setup cost.", includes: ["All 12 modules included", "Unlimited users", "Cloud hosting, backups & support", "Dedicated onboarding"] },
  },
  {
    slug: "fms", name: "FMS", descriptor: "Factory Management System", audience: "Food & beverage manufacturers", image: factory,
    promise: "Trace every ingredient from supplier and GRN to recipe, batch, carton, invoice and ledger.",
    modules: ["Suppliers", "Purchase orders", "Goods received notes", "Inventory & warehouse", "Recipes & production", "Cartons & packaging", "Customers & invoices", "Ledgers & analytics"],
    strengths: ["Standardized recipes and batches", "Ingredient-to-carton traceability", "Connected procurement and accounts"],
    timeline: "A unified 12-module production system",
    pricing: { monthly: "PKR 15,000", note: "One predictable monthly fee, unlimited users. Custom pricing for multi-site facilities.", includes: ["All 12 modules included", "Batch, carton & recipe management", "Supplier, PO & GRN workflows", "Cloud hosting, backups & support"] },
  },
  {
    slug: "mess-erp", name: "Mess ERP", descriptor: "Institutional hospitality operations", audience: "Messes & officers’ institutes", image: mess,
    promise: "A single accountable system for rooms, guests, food, events, finance and facilities.",
    modules: ["Room booking", "Guest portal", "Food & POS", "Invoicing", "Finance & ledger", "Inventory", "Halls & events", "Staff & maintenance", "Roles & access", "Reports"],
    strengths: ["QR-based guest self-service", "Complete auditability", "Cloud or on-premise deployment"],
    timeline: "Go live in as little as six weeks",
    pricing: { monthly: "PKR 30,000", setup: "PKR 200,000", note: "One-time setup and onboarding, then a single monthly fee. Applies to a single mess location.", includes: ["All ten modules, unlimited users", "Data migration & staff training", "Cloud hosting, security & backups", "No long-term lock-in"] },
  },
  {
    slug: "pims", name: "PIMS", descriptor: "Production Inventory Management", audience: "Industrial & chemical manufacturing", image: factory,
    promise: "Control materials, formulas, production batches and compliance from one source of truth.",
    modules: ["Dashboard & analytics", "Materials & categories", "Units of measure", "Recipes & bill of materials", "Batch tracking", "Suppliers & purchase orders", "Customers & reports", "Audit trail & access control"],
    strengths: ["Formula version control", "Raw-material-to-batch traceability", "Tamper-evident audit history"],
    timeline: "Go live in as little as four weeks",
    pricing: { monthly: "PKR 15,000", note: "All-inclusive monthly plan. Enterprise pricing for multi-site or high-volume facilities.", includes: ["All 12 modules included", "Unlimited users", "Advanced reports & analytics", "Cloud hosting, backups & support"] },
  },
];
