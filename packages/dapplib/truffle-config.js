require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strike rival noble modify give clog metal gasp'; 
let testAccounts = [
"0x0fb5dac677e0d7ee72fbec00d59b4e1ba71ca165ec0823b3f29455f8674ae914",
"0x6d4d6accb1fab590d31a4c465f552645dc6fa1e87372694707ce3e4c1aad2c43",
"0xe45fa01526ffddd1dcbf9454a1b7ae4a0b2a8e5fe3b31eda238135c422f3db67",
"0x4b6c896f2a2dbf7d470f92b1c1c8c335a9adfe4efd4c696bd156525a0a43e34d",
"0x095310aa4ec1c27afdbfeb8970a02633d5f18ddb78a1ca9baab6b27eda271b0d",
"0x29743dd4b023182285dcc23985c13be2ae2472b42b97ec9f1eecfdb10cf5207a",
"0x458fa5c94c1ca136cf7782e4294f9e7bcdca8c13e957e942f7e563ff824b9aa1",
"0x919ea05c2ec39958b8d8a463b92c83ddf412f4daf9d0788603c0fb091a985110",
"0xa187721e3ccd76f5b7b1ec89105ae3565e6039c14807a267696d1770733e7721",
"0x76e893cb8b4d154768eff5c24983c42ad0f9340217b069fccbf12875625fbf0c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

