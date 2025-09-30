import { execSync } from "child_process";

execSync("node prisma/migration/seeds/0_roles.js", { stdio: "inherit" });
execSync("node prisma/migration/seeds/1_users.js", { stdio: "inherit" });

console.log("seeds éxécutés")