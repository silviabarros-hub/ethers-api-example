var express = require('express')
var router = express.Router()
const ethers = require('ethers')

const contract_ABI = require('../../../contracts/contract_ABI')

const CONTRACT_ADDRESS = '0xb2ea51BAa12C461327d12A2069d47b30e680b69D'
const PROVIDER_URL = 'https://bsc-dataseed1.binance.org/'
const WALLET_ADDRESS = '0x248Dd3836E2A8B56279C04addC2D11F3c2497836'

router.get('/silviabarrosapitest', async function (req, res) {
  try {
    const provider = new ethers.JsonRpcProvider(PROVIDER_URL)
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contract_ABI,
      provider
    )
    const balance = await contract.balanceOf(WALLET_ADDRESS)
    const tokenName = await contract.name()
    const symbol = await contract.symbol()

    res.json({ balance: balance.toString(), tokenName, symbol })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error: Could not fetch data from the smart contract.')
  }
})

module.exports = router
