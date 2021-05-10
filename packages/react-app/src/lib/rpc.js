export default function getRpcUrl(networkId) {
  switch (networkId) {
    case 56:
      return 'https://bsc-dataseed1.ninicoin.io/';
    case 100:
      return 'https://quiet-empty-darkness.xdai.quiknode.pro/fb90655e4776074c95611ccb25409f2c1495b427/';
    case 128:
      return 'https://http-mainnet.hecochain.com';
    case 137:
      return 'https://rpc-connext-mainnet.maticvigil.com/v1/7d850b583693ed94dcf7e6f7088cf0bac4289e0d';
    default:
      throw new Error('No RPC configured for network: ', networkId);
  }
}
