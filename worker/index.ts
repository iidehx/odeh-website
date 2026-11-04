// Cloudflare Worker: serves the static export in ./out and handles the
// contact form, the only part of the site that needs a server.
import { handleContactSubmission } from "../src/lib/contact-handler";
import type { EmailConfig } from "../src/lib/email";
import type { Category } from "../src/lib/inquiries";

interface Env extends EmailConfig {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

const CONTACT_ROUTE = /^\/api\/contact\/(dental|therapy|real-estate)\/?$/;

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    const match = pathname.match(CONTACT_ROUTE);

    if (match) {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      }
      return handleContactSubmission(request, match[1] as Category, env);
    }

    if (pathname.startsWith("/api/")) {
      return new Response("Not Found", { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
