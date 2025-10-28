import { setCookie, destroyCookie, parseCookies } from "nookies";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET || "dev-secret";
const encodedKey = new TextEncoder().encode(secretKey);

// génère une session
export async function createSession(ctx, utilisateurId) {
  const expiresAt = remember;
  const session = await encrypt({ utilisateurId, expiresAt });

  setCookie(ctx, "session", session, {
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 40, //secondes
    path: "/",
  });
}

// met à jour la session
export async function updateSession(ctx) {
  const cookies = parseCookies(ctx);
  const session = cookies["session"];
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  setCookie(ctx, "session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  return payload;
}

// supprime la session
export async function deleteSession(ctx) {
  destroyCookie(ctx, "session");
}

// encrypt la session
export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

// vérifie la session et retourne une erreur si échouée
export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("La session n'a pas pu être vérifiée");
    return null;
  }
}
