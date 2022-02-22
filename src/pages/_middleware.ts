// /**
//  * index documents in algolia on start up
//  */
// void (async () => {
//   if (process.env.NEXT_PUBLIC_BASE_URL === undefined)
//     throw new Error(
//       'environment variable "NEXT_PUBLIC_BASE_URL" must be defined',
//     );

//   try {
//     await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/algolia`);
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error(err);
//   }
// })();

export function middleware() {
  // do nothing
}
