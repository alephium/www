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
  subtitle: Begin your Alephium journey
  cards:
    - title: Download the wallet
      image: ../images/wallet.svg
      description: Securely store and transfer your ALPH. Connect to dApps and
        start leveraging the Alephium ecosystem.
      link:
        text: Download
        url: https://github.com/alephium/desktop-wallet/releases/
        newTab: true
    - title: Start Mining
      image: ../images/mining.svg
      description: Start mining to contribute to the network security and
        receive ALPH rewards.
      link:
        text: Documentation
        url: https://wiki.alephium.org/mining/Solo-Mining-Guide
        newTab: true
    - title: Build your own
      image: ../images/code.svg
      description: Start building your own smart contracts, decentralized apps
        and protocols.
      link:
        text: Begin the primer
        url: https://wiki.alephium.org/dapps/A-Primer-With-The-Desktop-Wallet
        newTab: true
    - title: Get rewarded
      image: ../images/coins.svg
      description: Apply for a grant to develop your own project on Alephium.
        Receive rewards for contributing to any initiatives bringing value to the project.
      link:
        text: Check them out
        url: https://github.com/alephium/community/blob/master/Grant&RewardProgram.md
        newTab: true
technologySection:
  title: Technology
  subtitle: What makes Alephium different?
  blockFlowSection:
    title: "Scaling through sharding"
    description: Alephium is built on a novel and complete sharding algorithm called
      BlockFlow. It improves on the UTXO model of BTC to make it scalable, and
      uses DAG data structure to reach consensus between different shards. This
      will allow up to 10’000 Transactions Per Second (currently more than
      400 TPS vs Bitcoins 7 TPS).
    cardText: BlockFlow combines DAG and sharding to enable an efficient, secure and
      verifiable consensus algorithm.
    links:
      - text: More details
      - text: White paper
        url: https://github.com/alephium/white-paper/blob/master/alephium.pdf
        newTab: true
  polwSection:
    title: Sensible energy consumption
    description: Alephium employs "Proof of Less Work", which combines physical work
      and coin economics to dynamically adjust the work required to mine new
      blocks. Given the same network conditions, Alephium uses ~90% less energy
      compared to Bitcoin.
    cardText: Blockchain's success ultimately depends on its sustainability.
    links:
      - text: More details
        url:
        newTab: false
      - text: PoLW white paper
        url: https://github.com/alephium/white-paper/blob/master/polw.pdf
        newTab: true
  smartContractSection:
    title: The Ralph dApp programming language
    description:  Ralph is inspired by the Rust programming language, so we
      decided to borrow the R too. It allows for building efficient and secure smart
      contracts easier than when using Solidity for example. It's specifically designed
      to facilitate the creation of Decentralized Finance applications!
    cardText: A new programming paradigm for smart contracts and dApps.
    links:
      - text: More details
        url:
        newTab: false
      - text: Guide
        url: https://wiki.alephium.org/dapps/Technical-Guide-With-A-Fullnode
        newTab: true
  vmsSection:
    title: The Alphred Virtual Machine (AVM)
    description: It resolves many of the critical issues of the current dApps platforms with
      huge improvements on security, development experience and introductions of
      new paradigms such as trustless P2P smart contracts transactions.
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
    - title: Memberships
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
    - title: Community projects
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
        - text: Wiki
          url: https://wiki.alephium.org/
          newTab: true
        - text: Blog
          url: https://medium.com/@alephium
          newTab: true
        - text: White papers
          url: https://github.com/alephium/white-paper
          newTab: true
        - text: FAQ
          url: https://wiki.alephium.org/frequently-asked-questions
          newTab: true
    - title: Explore
      links:
        - text: Codebase
          url: http://github.com/alephium
          newTab: true
        - text: Explorer
          url: https://github.com/alephium/explorer
          newTab: true
        - text: Wallet
          url: https://github.com/alephium/desktop-wallet
          newTab: true
        - text: Reward & grant program
          url: https://github.com/alephium/community/blob/master/Grant&RewardProgram.md
          newTab: true
    - title: About
      links:
        - text: Team
          url:
          newTab: false
        - text: Careers
          url: https://pandasoftware.bamboohr.com/jobs/
          newTab: false
        - text: Contact
          url:
          newTab: false
        - text: Privacy policy
          url:
          newTab: false
---
