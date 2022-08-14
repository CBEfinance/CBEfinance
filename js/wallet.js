const tokenAbi = [
    {
        "inputs": [],
        "name": "ACTIVATE_FEE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "BASIC_MINGING_POWER",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "BURN_RATE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "GRANDINVITER_REWARD_MINING_POWER",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INVITER_REWARD_MINING_POWER",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_MINTER_COUNT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MIN_TOKEN_TO_POOL",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL_RATE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            }
        ],
        "name": "accountActivated",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "inviter",
                "type": "address"
            }
        ],
        "name": "activateAccount",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            }
        ],
        "name": "getAccountPower",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            }
        ],
        "name": "getAvailableMingingRewards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "page",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "pageCount",
                "type": "uint256"
            }
        ],
        "name": "getInvitedAccount",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            }
        ],
        "name": "getInvitedAccountCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMinterCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalPower",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pair",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "router",
        "outputs": [
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "takeMiningRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const tokenAddress = '0x3F1b55a1425A3dec6dB97cf5d31Cc06287f8A1C6';
const zeroAddress = '0x0000000000000000000000000000000000000000';

const connectButton = document.getElementById('connect');

// mining page itmes
const activateAccountButton = document.getElementById('activateAccountButton');
const inviterInput = document.getElementById('inviterAddress');
const inviteLinkInput = document.getElementById('inviteLink');
const copyInviteAddressButton = document.getElementById('copyInviteAddress');
const withdrawMiningButton = document.getElementById('withdrawMiningButton');

const minterAmountElement = document.getElementById('minterAmount');
const invitedAccountAmountElement = document.getElementById('invitedAccontAmount');
const myPowerValueElement = document.getElementById('myPowerValue');
const miningAmountElement = document.getElementById('miningAmount');

const errorInfo = document.getElementById('error');

// index page
const totalPowerValueElement = document.getElementById('totalPowerValue');
const rewardAmountElement = document.getElementById('rewardAmount');
const nextAvailableDateElement = document.getElementById('nextAvailableDate');

// invited page
const invitedAccountsElement = document.getElementById('invitedAccounts');
const invitedCountElement = document.getElementById('invitedCount');
const mingingPowerElement = document.getElementById('mingPower');

let contractInstance = null;
let currentAccount = null;
let ethersProvider = null;
let ethersSigner = null;
let inviterAddress = zeroAddress;

window.addEventListener('load', async function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const inviter = urlParams.get('inviter');
    if (inviter != null && inviter.length > 0) {
        inviterAddress = inviter;
    }

    await connectWallet();
    ethersProvider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    ethersSigner = ethersProvider.getSigner();
    contractInstance = new ethers.Contract(tokenAddress, tokenAbi, ethersSigner);
    currentAccount = await ethersSigner.getAddress();
    connectButton.innerText = getDisplayAddress(currentAccount);

    if (isInMiningPage()) {
        inviteLinkInput.value = generateInviteLink(currentAccount);
        inviterInput.value = inviterAddress;
        activateAccountButton.onclick = activateAccount;
        copyInviteAddressButton.onclick = copyTestToClipboard;
        withdrawMiningButton.onclick = withdrawMining;
    }

    if (isInMiningPage()) {
        await refreshMiningPageData();
    }

    if (isInvitedPage()) {
        invitedCountElement.innerText = await getInvitedAccountCount();
        mingingPowerElement.innerText = await getMyPowerValue();

        const accounts = await getInvitedAccounts();
        console.log(accounts);

        invitedAccountsElement.innerHTML = '';
        for (const index in accounts) {
            invitedAccountsElement.innerHTML += `<li class="invite-item">${accounts[index]}</li>\n`;
        }
    }
})

const connectWallet = async () => {
    await ethereum.request({
        method: 'eth_requestAccounts',
    });
}

const refreshMiningPageData = async () => {
    minterAmountElement.innerText = await getMinterCount();
    invitedAccountAmountElement.innerText = await getInvitedAccountCount();
    myPowerValueElement.innerText = await getMyPowerValue();
    miningAmountElement.innerText = await getMiningAmount();

    if (await isAccountActivated(currentAccount)) {
        activateAccountButton.innerText = '已激活';
        activateAccountButton.onclick = () => { };
        activateAccountButton.classList.add('disabled');
    }
}

const isInvitedPage = () => {
    return invitedAccountsElement != null;
}

const isInMiningPage = () => {
    return inviteLinkInput != null;
}

const onClickConnect = async () => {
    try {
        const newAccounts = await ethereum.request({
            method: 'eth_requestAccounts',
        })
        console.log(newAccounts);
        // handleNewAccounts(newAccounts)

        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        currentAccount = accounts[0];
        console.log(currentAccount);

        connectButton.value = getDisplayAddress(currentAccount);
        connectButton.onclick = () => { };
        inviteLinkInput.value = generateInviteLink(currentAccount);
    } catch (error) {
        errorInfo.innerText = error;
        console.error(error)
    }
}

const getDisplayAddress = (address) => {
    return address.substr(0, 6) + '...' + address.substr(address.length - 4, 4)
}

const copyTestToClipboard = async () => {
    const inviteLink = generateInviteLink(currentAccount);
    /* Copy the text inside the text field */
    await navigator.clipboard.writeText(inviteLink);
}

const generateInviteLink = (address) => {
    return "http://eooshi.com/mining.html?inviter=" + address
}

const setExceptionErrorMessage = (exception) => {
    if ('data' in exception && 'message' in exception.data) {
        errorInfo.innerText = exception.data.message;
    } else if (exception.toString().search('cannot estimate gas') >= 0 || exception.toString().search('transaction may fail') >= 0) {
        errorInfo.innerText = '合约参数校验不通过';
    } else if (exception.toString().search('insufficient funds for intrinsic transaction') >= 0) {
        errorInfo.innerText = '账户Eooshi代币或BNB余额不足';
    } else {
        errorInfo.innerText = exception;
    }
    
}

// start from here
const isAccountActivated = async (address) => {
    errorInfo.innerText = '';
    const activated = await contractInstance.accountActivated(address);
    return activated;
}

const activateAccount = async () => {
    errorInfo.innerText = '';
    activateAccountButton.value = '激活中...';

    if (inviterInput.value.length == 0) {
        errorInfo.innerText = '邀请人地址不能为空';
    }

    try {
        const transaction = await contractInstance.activateAccount(inviterInput.value, { from: currentAccount, value: ethers.utils.parseUnits("0.005") });
        const recipient = await transaction.wait();
        if (recipient.status == 1) {
            activateAccountButton.value = '激活成功';
            await refreshMiningPageData();
        } else {
            activateAccountButton.value = '激活失败';
        }
    } catch (e) {
        setExceptionErrorMessage(e);
        activateAccountButton.value = '激活失败';
    }
}

const getMinterCount = async () => {
    errorInfo.innerText = '';
    const amount = await contractInstance.getMinterCount();
    return amount;
}

const getInvitedAccountCount = async () => {
    errorInfo.innerText = '';
    const amount = await contractInstance.getInvitedAccountCount(currentAccount);
    return amount;
}

const getMyPowerValue = async () => {
    errorInfo.innerText = '';
    const power = await contractInstance.getAccountPower(currentAccount);
    return power;
}

const getMiningAmount = async () => {
    errorInfo.innerText = '';
    let amount = await contractInstance.getAvailableMingingRewards(currentAccount);
    amount = ethers.utils.formatUnits(amount);
    amount = parseFloat(amount).toFixed(2);
    return amount;
}

const getInvitedAccounts = async () => {
    const result = [];

    let amount = await getInvitedAccountCount();
    let page = 0;
    const pageCount = 10;

    while (amount > 0) {
        const tmp = await contractInstance.getInvitedAccount(currentAccount, page, pageCount);
        amount -= tmp.length;
        page += 1;
        result.push(...tmp);
    }
    return result;
}

const withdrawMining = async () => {
    errorInfo.innerText = '';
    withdrawMiningButton.innerText = '提取中...';

    try {
        const transaction = await contractInstance.takeMiningRewards();
        const recipient = await transaction.wait();
        if (recipient.status == 1) {
            withdrawMiningButton.innerText = '提取成功';
            await refreshMiningPageData();
        } else {
            withdrawMiningButton.innerText = '提取失败';
        }
    } catch (e) {
        setExceptionErrorMessage(e);
        withdrawMiningButton.innerText = '提取失败';
    }
}