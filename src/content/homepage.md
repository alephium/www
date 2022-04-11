---
headerSection:
  dark:
    title: A new paradigm
    subtitle: "Alephium is the first live layer 1 sharded blockchain scaling 
    and improving on Bitcoin core technologies, Proof of Work and UTXO. It delivers 
    a highly performant, secure DeFi & dApps platform with enhanced energy efficiency."
  light:
    title: Accessibility & Usability
    subtitle: From its technical design to its interfaces, 
      Alephium has been created to address the challenges of accessibility, 
      scalability, and security encountered by decentralized applications today.
introSection:
  title: Start
  subtitle: Engage with us.
  cards:
    - title: Mine
      description: Start mining to contribute to the network security and receive ALPH 
        rewards.
      link:
        text: Documentation
        url: https://wiki.alephium.org/mining/Solo-Mining-Guide
        newTab: true
    - title: Contribute
      description: Start testing and report issues or contribute to the Alephium codebase.
      link:
        text: Codebase
        url: https://github.com/alephium/
        newTab: true
    - title: Build
      description: Start building your own smart contracts, decentralized apps and
        protocols.
      link:
        text: Guide
        url: https://wiki.alephium.org/smart-contract/Smart-Contract-Guide
        newTab: true
technologySection:
  title: Technology
  subtitle: What makes Alephium different?
  blockFlowSection:
    title: "Blockflow: sharding on BTC's proven foundations"
    description: Alephium is built on the BlockFlow algorithm which delivers
      efficient and practical UTXO sharding. Inspired by distributed computing
      models, it combines DAG (Directed Acyclic Graph) and sharding. Being much
      more lightweight than other sharding methods, BlockFlow also natively
      supports single-step cross shard transactions, making the Alephium UX as
      smooth as any single chain platform.
    cardText: BlockFlow combines DAG and sharding to enable an efficient, secure and
      verifiable consensus algorithm.
    links:
      - text: More details
      - text: White paper
        url: https://github.com/alephium/white-paper/blob/master/alephium.pdf
        newTab: true
  polwSection:
    title: Proof of Less Work (PoLW)
    description: PoLW uses a clever combination of physical work and token economics
      to dynamically adjust the work required to mine new blocks, ensuring a
      reduced energy footprint compared to classic Nakamoto PoW mining.
    cardText: Blockchain's success ultimately depends on its sustainability.
    links:
      - text: More details
        url:
        newTab: false
      - text: PoLW white paper
        url: https://github.com/alephium/white-paper/blob/master/polw.pdf
        newTab: true
  smartContractSection:
    title: Smart contract design
    description: Alephium's smart contracts have been designed and implemented to be
      scalable, functional, practical with a focus on security and reduced state
      usage. Its stateful UTXO model combines the advantages of the UTXO model
      and the account model.
    cardText: A new programming paradigm for smart contracts and dApps.
    links:
      - text: More details
        url:
        newTab: false
      - text: Guide
        url: https://wiki.alephium.org/smart-contract/Smart-Contract-Guide
        newTab: true
  vmsSection:
    title: Novel VM
    description: Alephium uses a simple, safe and flexible virtual machine 
      designed for dApps, and more specifically DeFi. Its dedicated VM leverages 
      and improves on the UTXO model to address DeFi’s security issues and execution 
      bottleneck. Our VM focuses on contract security and IO performance. The key 
      features are its first-class token system, multiple-caller contract and 
      fine-grained execution model. 
    cardText: VMs can be a big bottleneck when it comes to Blockchain performances.
      Not on Alephium.
    links:
      - text: More details
        url:
        newTab: false
  numbersSection:
    title: Some numbers
    subtitle: We're passionate and committed to outstanding quality in everything we
      do. We took the necessary time to transform theory into actual technologies.
    columns:
      - number: '16'
        description: shards running on mainnet.
      - number: 100MB
        description: RAM needed for a Raspberry-Pi based full node.
      - number: '>3 years'
        description: of Research & Development.
usabilitySection:
  title: Usability
  subtitle: Designed for humans
  description: Our wallet is only the first step. The intricate and innovative
    parts of technology should be at reach, without becoming an obstacle to
    accessibility and usability. Alephium aims at placing the user at the
    center, regardless of their skills.
  button:
    text: Get the wallet
    url: https://github.com/alephium/desktop-wallet/releases/latest
    newTab: true
  images:
    - src: ../images/wallet-welcome.png
      altText: Wallet welcome screen
    - src: ../images/wallet-seed.png
      altText: Wallet seed phrase screen
    - src: ../images/wallet-security.png
      altText: Wallet security check screen
    - src: ../images/wallet-ready.png
      altText: Wallet everything is ready screen
ecosystemSection:
  title: Ecosystem
  subtitle: Growing fast
  subsections:
    - title: Partners
      description: "From lawyers to peer blockchains, lobbying & local associations, they make us feel part of a larger ecosystem."
      image: ../images/network.svg
      items:
        - title: 'Leax'
          logo: '../images/logos/leax.svg'
          url: https://www.leax.ch/
        - title: 'UTXO Alliance'
          logo: '../images/svgs/utxo-aliance-logo-white.svg'
          url: https://utxo-alliance.org/
        - title: 'Bitcoin Association Switzerland'
          logo: '../images/svgs/bas-logo-white.svg'
          url: https://www.bitcoinassociation.ch/
    - title: Backers
      description: "They provided us with early backing, funding, strategic advice, introductions and so much more!"
      image: ../images/award.svg
      items:
        - title: 'Alphemy Capital'
          logo: '../images/logos/alphemy-capital-icon.svg'
          url: https://alphemy.capital/
        - title: 'White Paper Capital'
          logo: '../images/logos/white-paper-capital-icon.svg'
          url: https://www.whitepapercapital.com/
        - title: 'Archery Fund'
          url: https://archery.fund/
        - title: '80+ Private Individuals'
    - title: Miners, dApps & Community Projects
      description: "Building on top, around or below what we do, securing the network or providing services, they are the life & blood of Alephium & the reasons we grind everyday!"
      image: ../images/sprout.svg
      items:
        - title: 'Sesame Wallet'
          logo: '../images/logos/sesame-wallet-icon.svg'
          url: https://sesame-wallet.io/
        - title: 'MetaPool'
          logo: ''
          url: https://www.metapool.tech/dashboard
        - title: 'WoolyPooly'
          logo: ''
          url:  https://woolypooly.com/en/coin/alph
        - title: 'Herominer'
          logo: '../images/logos/hero-miner-bw.png'
          url: https://herominers.com/
        - title: 'EnigmaPool'
          logo: ''
          url: https://enigmapool.com/
    - title: Exchanges
      description: "Exchanges are vital to our users, miners and backers. Find our trading pairs there!"
      image: ../images/exchange.svg
      items:
        - title: 'Gate.io'
          logo: '../images/logos/gate-io.svg'
          url: https://www.gate.io/trade/ALPH_USDT
startNowSection:
  title: Start now
  subtitle: Build and contribute
  description: Alephium is already live. You can start building, earning, and
    contributing right now.
  cards:
    - title: Start mining
      subtitle: Earn ALPH tokens
      description: Mining is crucial to secure and verify transactions on the Alephium
        blockchain. Contribute to the growth and security of our network and
        receive ALPH block rewards. Currently, we support CPU and GPU mining and
        will soon offer FPGA mining support
      link:
        url: https://wiki.alephium.org/mining/Solo-Mining-Guide
        text: Instructions
        newTab: true
    - title: Build your own
      subtitle: ''
      description: Start building your own smart contracts, decentralized apps and 
        protocols. Alephium is made to build powerful, secure, and scalable dApps. 
        Its stateful UTXO model combines the advantages of both the UTXO model and 
        account model. 
      link:
        url: https://github.com/alephium/
        text: Codebase
        newTab: true
    - title: Work @ Alephium
      subtitle: ''
      description: Our team & community members are our biggest assets. With them, 
        with you, we plan to make Alephium the preferred blockchain for powerful, 
        accessible and secure dApps & web 3.0. If you think you're uniquely suited to 
        support Alephium, we want to hear from you. We're based in beautiful 
        Switzerland, but you can contribute from anywhere in the world.
      link:
        url: https://pandasoftware.bamboohr.com/jobs/
        text: Job openings
        newTab: true
    - title: Contribute to the code
      subtitle: Alephium is open source!
      description: Start testing and report issues or contribute to the Alephium
        codebase. We would love to see your contribution integrated into the
        Alephium codebase!
      link:
        url: https://github.com/alephium/
        text: To the codebase
        newTab: true
followUsSection:
  title: Follow us
  subtitle: Join the community
  description: Alephium's community is growing fast. Fascinated by our
    technology? Come learn and build with us!
  socialMediaLinks:
    - name: Discord
      url: https://discord.gg/JErgRBfRSB
    - name: Telegram
      url: https://t.me/alephiumgroup
    - name: Twitter
      url: https://twitter.com/alephium
    - name: Medium
      url: https://medium.com/@alephium
    - name: Reddit
      url: https://www.reddit.com/r/Alephium
    - name: LinkedIn
      url: https://www.linkedin.com/company/alephium
    - name: Youtube
      url: https://www.youtube.com/channel/UCIX9Eww2Kch7sc0E6gCmEdg
footer:
  columns:
    - title: Resources
      links:
        - text: Tokenomics
          url: https://medium.com/@alephium/tokenomics-of-alephium-61d59b51029c
          newTab: true
        - text: Documentation
          url: https://wiki.alephium.org/
          newTab: true
        - text: BlockFlow white paper
          url: https://github.com/alephium/white-paper/blob/master/alephium.pdf
          newTab: true
        - text: PoLW white paper
          url: https://github.com/alephium/white-paper/blob/master/polw.pdf
          newTab: true
        - text: FAQ
          url: https://wiki.alephium.org/frequently-asked-questions
          newTab: true
    - title: Open source
      links:
        - text: Alephium
          url: https://github.com/alephium/alephium
          newTab: true
        - text: Explorer
          url: https://github.com/alephium/explorer
          newTab: true
        - text: Wallet
          url: https://github.com/alephium/desktop-wallet
          newTab: true
    - title: Project
      links:
        - text: About us
          url:
          newTab: false
        - text: Team
          url:
          newTab: false
        - text: Contact
          url:
          newTab: false
        - text: Privacy policy
          url:
          newTab: false
---
