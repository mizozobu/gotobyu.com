interface Window {
  /** for Google Tag Manager */
  dataLayer: unknown[];
}

// With top-level "import" or "export" (meaning it's a module),
// use "declare global { ... }"
// Otherwise, just merge interface.
//
// e.g. (module)
// import xxx from '...';
//
// declare global {
//   interface Window {
//     dataLayer: unknown[];
//   }
// }
//
// e.g. (non-module)
// interface Window {
//   dataLayer: unknown[];
// }
//
// links
// - https://dev.classmethod.jp/articles/typings-of-window-object/
// - https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript/40204572#40204572
// - https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation
