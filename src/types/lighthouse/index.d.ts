/// <reference types="lighthouse/types/global-lh" />

declare module 'lighthouse' {
  import type Connection from 'lighthouse/lighthouse-core/gather/connections/connection';

  /**
   * Run Lighthouse.
   * @param {string=} url The URL to test. Optional if running in auditMode.
   * @param {LH.Flags=} flags Optional settings for the Lighthouse run. If present,
   *   they will override any settings in the config.
   * @param {LH.Config.Json=} configJSON Configuration for the Lighthouse run. If
   *   not present, the default config is used.
   * @param {Connection=} userConnection
   * @return {Promise<LH.RunnerResult|undefined>}
   */
  function lighthouse(
    url: string,
    flags?: Partial<LH.Flags>,
    configJSON?: LH.Config.Json,
    userConnection?: Connection,
  ): Promise<LH.RunnerResult>;

  export default lighthouse;
}
