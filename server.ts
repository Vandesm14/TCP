// import { HOST, PORT, MAX_PKG_LEN } from "./common.ts";

// const listener = Deno.listen({ hostname: HOST, port: PORT, transport: "tcp" });
// console.log(`LISTENING on ${HOST}:${PORT}...`);

// for await (const conn of listener) {
//   const buf = new Uint8Array(MAX_PKG_LEN);
//   console.log(`BYTE: ${await conn.read(buf)}`);
//   console.log(`DATA: "${(new TextDecoder()).decode(buf)}"`);
// }

// listener.close();
