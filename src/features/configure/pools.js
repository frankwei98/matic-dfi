import BigNumber from "bignumber.js";
// id: '池子id',
// name: '池子名字',  
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// depostAlert: '存入提示'
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price: 
export const pools = [
  {
    id: 'matic',
    name: 'MATIC',  
    token: 'MATIC',
    tokenDescription: 'MATIC',
    tokenAddress: '',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWMATIC',
    earnedTokenAddress: '0xEe56750E3FbD352Ee55EFb064d95f070083161A5',
    earnContractAddress: '0xEe56750E3FbD352Ee55EFb064d95f070083161A5',
    defaultApy: "00.00",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    id: 'wmatic',
    name: 'WMATIC',  
    token: 'WMATIC',
    tokenDescription: 'WMATIC',
    tokenAddress: '0x7805adbF0906Bce163c76208a104BfD78028D953',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    // depostAlert:'Vault-Dialog-Content',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWMATIC',
    earnedTokenAddress: '0xEe56750E3FbD352Ee55EFb064d95f070083161A5',
    earnContractAddress: '0xEe56750E3FbD352Ee55EFb064d95f070083161A5',
    defaultApy: "00.00",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
]