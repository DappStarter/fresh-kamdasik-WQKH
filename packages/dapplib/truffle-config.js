require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stove radar remain method inflict ensure slot gesture'; 
let testAccounts = [
"0x1381e10f85ef84c360d9c9771305fa01929aa7f347de6121cec49890a65cbb5b",
"0xf779d0d28c975bb3110c676eb6076f925d9a349690c0b0b52b4f25aef635e605",
"0x53835191a20115be7d47c527bd2d56edfc3d9a7bac0fbe2c0707b8b72198635b",
"0x1a00f4be70ca1298741a93f69253ee3fab3d85b84a602a3da8791ceec921eae2",
"0x21c82de22f98a4640d66b085e99fa0b4e29081facf38e51a583c2f1b4abbba5a",
"0x3b9127569e7abd9c7c96cf7be8f9155e73d274bb83bd08682d7534215c3a7870",
"0x56e98f593d53dccd3ad949575bde8f94060ef4e48afe144e300a01790a5b061e",
"0x617b819b1c0c8f8795d4fbea57453d71472ba1f0ec80b9ee417e9f8fd0996bbf",
"0xc29815170c4faf2e43e2538a186e0e42fa7949da1f7137566112c8f55f04725d",
"0x1622b35d5122693682b48837f63587baa0c3db7158644fddc6ec4b149af7d21a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


